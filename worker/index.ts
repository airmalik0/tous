// Cloudflare Worker: раздаёт собранную статику из ./dist и обслуживает POST /api/lead.
// Токен бота живёт ТОЛЬКО в секретах Worker (wrangler secret put TG_BOT_TOKEN)
// и никогда не попадает в клиентский бандл.

const MAX_CONTACT = 200
const MAX_DESCRIPTION = 2000
const MAX_CALL_TIME = 200

type Env = {
  ASSETS: Fetcher
  TG_BOT_TOKEN?: string
  TG_CHAT_ID?: string
}

type LeadBody = {
  contact?: unknown
  description?: unknown
  callTime?: unknown
  locale?: unknown
  labels?: {
    newLead?: unknown
    contact?: unknown
    description?: unknown
    time?: unknown
  }
}

function asString(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  return value.slice(0, max).trim()
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

async function handleLead(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405)
  }

  const token = env.TG_BOT_TOKEN
  const chatId = env.TG_CHAT_ID
  if (!token || !chatId) {
    return json({ ok: false, error: 'server_not_configured' }, 500)
  }

  let body: LeadBody
  try {
    body = (await request.json()) as LeadBody
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400)
  }
  if (!body || typeof body !== 'object') {
    return json({ ok: false, error: 'invalid_body' }, 400)
  }

  const contact = asString(body.contact, MAX_CONTACT)
  if (!contact) {
    return json({ ok: false, error: 'contact_required' }, 400)
  }

  const description = asString(body.description, MAX_DESCRIPTION)
  const callTime = asString(body.callTime, MAX_CALL_TIME)
  const locale = asString(body.locale, 8).toUpperCase().replace(/[^A-Z]/g, '') || 'RU'

  const L = body.labels ?? {}
  const labelNewLead = asString(L.newLead, 80) || '🔔 Новая заявка'
  const labelContact = asString(L.contact, 80) || 'Контакт'
  const labelDescription = asString(L.description, 80) || 'Описание'
  const labelTime = asString(L.time, 80) || 'Время'

  const lines = [labelNewLead, '', `🌐 ${locale}`, `${labelContact}: ${contact}`]
  if (description) lines.push('', `${labelDescription}:`, description)
  if (callTime) lines.push('', `${labelTime}: ${callTime}`)

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Без parse_mode — текст пользователя уходит как plain text,
      // никакой Markdown/HTML-инъекции в сообщение админу.
      body: JSON.stringify({ chat_id: chatId, text: lines.join('\n') }),
    })

    if (!tg.ok) {
      return json({ ok: false, error: 'telegram_error' }, 502)
    }

    return json({ ok: true }, 200)
  } catch {
    return json({ ok: false, error: 'telegram_unreachable' }, 502)
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/lead') {
      return handleLead(request, env)
    }
    // Остальные /api/* не существуют — отдаём JSON, а не SPA-заглушку.
    if (url.pathname.startsWith('/api/')) {
      return json({ ok: false, error: 'not_found' }, 404)
    }

    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
