import { ref } from 'vue'
import { Login } from 'src/models'
import { useRoute, useRouter } from 'vue-router'
import { useLoginOrSignUpPinia } from 'stores/login-or-sign-up'
import { alertErrors } from 'src/helpers'
import { i18n } from 'boot/i18n'

export const useLoginOrSignUp = () => {
  const form = ref<Login>({ email: '', password: '', confirmPassword: '' })
  const loading = ref(false)
  const route = useRoute()
  const router = useRouter()
  const store = useLoginOrSignUpPinia()

  const loginOrSignUp = (params: boolean): string =>
    params ? 'Login' : i18n.global.t('form.signUp')

  const submit = async (): Promise<void> => {
    try {
      loading.value = true
      if (route.name === 'login-admin') {
        await store.login(form.value.email, form.value.password)
        await router.push({ name: 'landing' })
        return
      }

      await store.signUp(form.value.email, form.value.password)
      await router.push({ name: 'landing' })
    } catch (err: any) {
      await alertErrors(err.response.data.error as string)
    } finally {
      loading.value = false
    }
  }

  return { form, loading, loginOrSignUp, submit }
}
