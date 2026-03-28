import type { Content } from '@google/generative-ai'

const MAX_HISTORY = 20
const TTL_MS = 30 * 60 * 1000 // 30 minutes

interface Session {
  history: Content[]
  timer: ReturnType<typeof setTimeout>
}

const sessions = new Map<number, Session>()

export function getHistory(userId: number): Content[] {
  const session = sessions.get(userId)
  return session ? session.history : []
}

export function addMessage(userId: number, role: 'user' | 'model', text: string) {
  let session = sessions.get(userId)

  if (!session) {
    session = { history: [], timer: setTimeout(() => sessions.delete(userId), TTL_MS) }
    sessions.set(userId, session)
  } else {
    clearTimeout(session.timer)
    session.timer = setTimeout(() => sessions.delete(userId), TTL_MS)
  }

  session.history.push({
    role,
    parts: [{ text }],
  })

  // Keep only last N messages
  if (session.history.length > MAX_HISTORY) {
    session.history = session.history.slice(-MAX_HISTORY)
  }
}
