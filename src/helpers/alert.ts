import { useAlert } from 'src/composables'
import { i18n } from 'boot/i18n'

export const alertUpdated = async (
  text = i18n.global.t('swalMessage.text')
): Promise<void> => {
  const { alertSuccess } = useAlert()
  await alertSuccess({ title: i18n.global.t('swalMessage.success'), text })
}

export const alertErrors = async (text: string): Promise<void> => {
  const { alertError } = useAlert()
  await alertError({ title: i18n.global.t('swalMessage.error'), text })
}
