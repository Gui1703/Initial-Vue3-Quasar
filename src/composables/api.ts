import { api } from 'src/boot/axios'
import { headers } from 'src/composables'
import { APIParams } from 'src/models'

const { bearer } = headers()

export class UseAPI {
  async get<T = unknown>(p: APIParams): Promise<T> {
    const config = p.params
      ? { params: p.params, ...bearer() }
      : { ...bearer() }
    const { data } = await api.get<T>(p.endpoint, config)
    return data
  }

  async post<T = unknown>(p: APIParams): Promise<T> {
    const { data } = await api.post<T>(p.endpoint, p.data, bearer())
    return data
  }

  async put<T = unknown>(p: APIParams): Promise<T> {
    const { data } = await api.put<T>(p.endpoint, p.data, bearer())
    return data
  }

  async remove<T = unknown>(p: APIParams): Promise<T> {
    const { data } = await api.delete<T>(p.endpoint, bearer())
    return data
  }
}
