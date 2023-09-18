import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { app } from 'src/config'
import { alertErrors } from 'src/helpers'

export const useLoginOrSignUpPinia = defineStore({
  id: 'login-or-sign-up.ts',
  state: () => ({ accessToken: '' }),
  persist: true,
  actions: {
    async signUp(email: string, password: string): Promise<void> {
      const auth = getAuth(app)
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          this.accessToken = userCredential.user.refreshToken
        })
        .catch(async (err) => {
          await alertErrors(err.message)
        })
    },
    async login(email: string, password: string): Promise<void> {
      const auth = getAuth(app)
      return await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          this.accessToken = userCredential.user.refreshToken
        })
        .catch(async (err) => {
          await alertErrors(err.message)
        })
    },
    async logout() {
      const auth = getAuth(app)
      await signOut(auth)
      this.accessToken = ''
    }
  },
  getters: {
    getAccessToken: (state) => state.accessToken
  }
})
