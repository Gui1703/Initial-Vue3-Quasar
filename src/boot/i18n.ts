import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

const local = localStorage.getItem('language')
const lang = local ? (JSON.parse(local).language as 'pt-BR' | 'en-US') : 'pt-BR'

const i18n = createI18n({
  locale: lang,
  globalInjection: true,
  legacy: false,
  messages
})

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n)
})

export { i18n }
