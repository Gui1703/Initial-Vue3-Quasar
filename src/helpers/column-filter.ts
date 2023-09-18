import { QTableProps } from 'quasar'

export type ColumnFilter = Array<{ selected: boolean; label: string }>

export const columnFilter = (builder: QTableProps['columns']) => {
  const temp: ColumnFilter = []
  builder!.map((b) => temp.push({ selected: true, label: b.label }))
  return temp
}
