import { ref } from 'vue'
import { useLoginOrSignUpPinia } from 'stores/login-or-sign-up'
import { useRouter } from 'vue-router'

export const useAdminLayout = () => {
  const miniState = ref(false)
  const store = useLoginOrSignUpPinia()
  const router = useRouter()
  function toggleLeftDrawer() {
    miniState.value = !miniState.value
  }

  function drawerClick() {
    miniState.value = false
  }

  const logout = async () => {
    await store.logout()
    await router.push({ name: 'login-admin' })
  }

  return { miniState, toggleLeftDrawer, drawerClick, logout }
}
