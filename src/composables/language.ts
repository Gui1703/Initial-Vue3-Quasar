import { useI18n } from 'vue-i18n'
import { useLanguageStore } from 'stores/language'
import { useRouter } from 'vue-router'

export const useLanguage = () => {
  const { locale } = useI18n()
  const store = useLanguageStore()
  const router = useRouter()

  const changeLanguage = async (lang: 'pt-BR' | 'en-US') => {
    await router.push({ name: 'landing' })
    locale.value = lang
    store.changeLanguage(lang)
  }

  return { changeLanguage }
}
