import { object, Schema, string, ref } from 'yup'
import { i18n } from 'boot/i18n'
const message = i18n.global.t('messageError.requiredField')
const messageInvalidEmail = i18n.global.t('messageError.invalidEmail')
const messageMinPassword = i18n.global.t('messageError.minPassword')
const messageConfirmPassword = i18n.global.t('messageError.confirmPassword')

export interface Login {
  email: string
  password: string
  confirmPassword: string
}

export const loginSchema = (): Schema<any> => {
  return object({
    email: string().email(messageInvalidEmail).trim().required(message),
    password: string().min(6, messageMinPassword).trim().required(message)
  })
}

export const signUpSchema = (): Schema<any> => {
  return object({
    email: string().email(messageInvalidEmail).trim().required(message),
    password: string().min(6, messageMinPassword).trim().required(message),
    passwordConfirmation: string()
      .trim()
      .oneOf([ref('password')], messageConfirmPassword)
      .required(message)
  })
}
