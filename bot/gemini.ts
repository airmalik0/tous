import { GoogleGenerativeAI, type Content } from '@google/generative-ai'
import { SYSTEM_PROMPT } from './prompt.js'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY!)

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
  systemInstruction: SYSTEM_PROMPT,
})

export async function chat(
  history: Content[],
  userMessage: string
): Promise<string> {
  const chatSession = model.startChat({ history })

  const result = await chatSession.sendMessage(userMessage)
  const text = result.response.text()

  return text || 'Извините, не удалось сформировать ответ. Попробуйте переформулировать вопрос.'
}
