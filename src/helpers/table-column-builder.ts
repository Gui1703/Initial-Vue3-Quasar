import { QTableProps } from 'quasar'

type Align = 'left' | 'right' | 'center' | undefined

export class TableColumnBuilder {
  private readonly columns: QTableProps['columns']

  private constructor(columns: QTableProps['columns'] = []) {
    this.columns = columns ?? []
  }

  static of(): TableColumnBuilder {
    return new TableColumnBuilder()
  }

  column(
    field: string,
    label: string,
    name: string = field,
    align: Align = 'left'
  ): TableColumnBuilder {
    this.columns!.push({ field, label, align, name, sortable: true })
    return this
  }

  columnBoolean(
    field: string,
    label: string,
    format: string,
    align: Align = 'left'
  ): TableColumnBuilder {
    this.columns!.push({
      field,
      label,
      align,
      name: field,
      sortable: true,
      format: (val: boolean) => (val ? 'Sim' : 'Não')
    })
    return this
  }

  build(): QTableProps['columns'] {
    return this.columns
  }
}
