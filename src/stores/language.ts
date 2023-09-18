import { defineStore } from 'pinia'
import { i18n } from 'src/boot/i18n'

export const useLanguageStore = defineStore({
  id: 'language',
  state: () => ({
    language: i18n.global.locale
  }),
  persist: true,
  actions: {
    changeLanguage(lang: 'en-US' | 'pt-BR') {
      this.language = lang
    }
  },
  getters: {
    currentLocale: (state) => state.language
  }
})
