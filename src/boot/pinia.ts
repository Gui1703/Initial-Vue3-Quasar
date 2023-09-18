import { boot } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export default boot(({ app }) => {
  const pinia = createPinia()
  pinia.use(
    createPersistedState({
      storage: localStorage,
      beforeRestore: () => null,
      afterRestore: () => null,
      serializer: {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      }
    })
  )
  app.use(pinia)
})
