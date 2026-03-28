import type { Context } from 'telegraf'

const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID

interface LeadInfo {
  userName: string
  userTag: string | undefined
  userId: number
  messageText: string
}

export async function notifyAdmin(ctx: Context, info: LeadInfo) {
  if (!ADMIN_CHAT_ID) return

  const tag = info.userTag ? `@${info.userTag}` : `ID: ${info.userId}`

  const message = [
    `📩 Новая заявка из бота`,
    ``,
    `👤 ${info.userName}`,
    `💬 ${tag}`,
    ``,
    `📝 Сообщение:`,
    info.messageText,
  ].join('\n')

  try {
    await ctx.telegram.sendMessage(ADMIN_CHAT_ID, message)
  } catch (err) {
    console.error('Failed to notify admin:', err)
  }
}
