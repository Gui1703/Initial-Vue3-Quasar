export function headers() {
  const bearerAuthorization =
    'Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8'

  const bearer = () => {
    return {
      headers: {
        Authorization: bearerAuthorization,
        Accept: 'application/json',
        ContentType: 'application/json'
      }
    }
  }

  return { bearer }
}
