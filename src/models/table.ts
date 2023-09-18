import { QTableProps } from 'quasar'
import { ColumnFilter } from 'src/helpers'

export type TableColumn = {
  label: string
  format?: undefined | ((val: any, row?: unknown) => any)
  name: string
  field: string | ((row: unknown) => unknown)
  align?: 'left' | 'right' | 'center'
  sortable?: boolean
}
export interface TableProps {
  rows: QTableProps['rows']
  columns: QTableProps['columns']
  loading: boolean
  hasEdit?: boolean
  hasDelete?: boolean
  hasRegister?: boolean
  hasSearch?: boolean
  hasColumnFilter?: boolean
  hasFilter?: boolean
  disable?: boolean
}

export interface TableTop {
  modelValue: string
  loading: boolean
  haveRegister?: boolean
  haveSearch?: boolean
  options: ColumnFilter
  disable?: boolean
}

export interface TableMobile {
  value: TableColumn
  data: any
  completeData: any
  hasEdit?: boolean
  hasDelete?: boolean
}
