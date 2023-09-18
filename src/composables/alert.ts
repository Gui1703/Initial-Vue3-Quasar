import Swal from 'src/boot/swal'
import { AlertParameters } from 'src/models'

export function useAlert() {
  const alertSuccess = async ({ title, text }: AlertParameters) => {
    await Swal.fire({
      title,
      text,
      icon: 'success',
      confirmButtonColor: '#062b68'
    })
  }
  const alertError = async ({ title, text }: AlertParameters) => {
    await Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonColor: '#062b68'
    })
  }

  return { alertSuccess, alertError }
}
