import { TableColumnBuilder as builder } from 'src/helpers'
import { QTableProps } from 'quasar'
import { object, Schema, string } from 'yup'
import { i18n } from 'boot/i18n'

export interface APIPublic {
  body?: string
  id?: number
  title?: string
  userId?: number
}

export const columnBuilder = (): QTableProps['columns'] => {
  return [
    ...builder
      .of()
      .column('id', 'ID')
      .column('userId', 'UserID')
      .column('title', i18n.global.t('form.nameFieldColumnBuilder.title'))
      .column(
        'id',
        i18n.global.t('form.nameFieldColumnBuilder.actions'),
        'actions',
        'right'
      )
      .build()!
  ]
}

export const crudSchema = (): Schema<any> => {
  const message = i18n.global.t('messageError.requiredField')

  return object({
    title: string().trim().required(message),
    body: string().trim().required(message)
  })
}
