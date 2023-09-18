export interface Button {
  label: string
  loading: boolean
  type?: string
  disable?: boolean
  colorBackground?: string
  textColor?: string
}

export interface IconButton {
  condition?: boolean
  iconButton: string
  tip: string
  redirectName?: string
  textColor?: string
  closePopUp?: boolean
  dense?: boolean
  rounded?: boolean
  isDelete?: boolean
  isEdit?: boolean
}
