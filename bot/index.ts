import 'dotenv/config'
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { chat } from './gemini.js'
import { getHistory, addMessage } from './sessions.js'
import { notifyAdmin } from './notify.js'
import { WELCOME_MESSAGE } from './prompt.js'

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!)

// /start command
bot.start((ctx) => {
  ctx.reply(WELCOME_MESSAGE)
})

// Handle text messages
bot.on(message('text'), async (ctx) => {
  const userId = ctx.from.id
  const userMessage = ctx.message.text

  // Show "typing" indicator
  await ctx.sendChatAction('typing')

  try {
    const history = getHistory(userId)
    addMessage(userId, 'user', userMessage)

    const response = await chat(history, userMessage)
    addMessage(userId, 'model', response)

    await ctx.reply(response, { parse_mode: 'Markdown' })

    // Forward every message to admin for awareness
    const firstName = ctx.from.first_name || ''
    const lastName = ctx.from.last_name || ''
    await notifyAdmin(ctx, {
      userName: `${firstName} ${lastName}`.trim(),
      userTag: ctx.from.username,
      userId: ctx.from.id,
      messageText: userMessage,
    })
  } catch (err) {
    console.error('Error processing message:', err)

    // If Markdown parse fails, retry without parse_mode
    try {
      const history = getHistory(userId)
      const lastModel = history.filter(h => h.role === 'model').pop()
      if (lastModel) {
        await ctx.reply(lastModel.parts.map(p => 'text' in p ? p.text : '').join(''))
      } else {
        await ctx.reply('Извините, произошла ошибка. Попробуйте ещё раз или свяжитесь с нами напрямую: +998 90 135 96 66')
      }
    } catch {
      await ctx.reply('Извините, произошла ошибка. Попробуйте ещё раз или свяжитесь с нами напрямую: +998 90 135 96 66')
    }
  }
})

// Launch
bot.launch()
console.log('🤖 imbim bot is running...')

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
