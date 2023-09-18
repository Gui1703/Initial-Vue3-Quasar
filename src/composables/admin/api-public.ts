import { APIParams, APIPublic } from 'src/models'
import { alertErrors, alertUpdated } from 'src/helpers'
import { UseAPI } from 'src/composables'
import { computed, ref } from 'vue'
import { i18n } from 'boot/i18n'

export const useAPiPublic = () => {
  const endpoint = 'posts'
  const api = new UseAPI()
  const getParams = ref<APIParams>({ endpoint })
  const loading = ref(false)
  const showDialog = ref(false)
  const rows = ref<APIPublic[]>([])
  const editId = ref<string | undefined>()
  const form = ref<APIPublic>({})
  const _load = async (arg?: string, pagination?: string) => {
    if (arg !== 'no_update') {
      try {
        loading.value = true
        getParams.value = {
          endpoint: pagination ? `${endpoint}${pagination}` : endpoint
        }
        rows.value = await api.get<APIPublic[]>(getParams.value)
        console.log(rows.value)
      } catch (err: any) {
        await alertErrors(err.message)
      } finally {
        editId.value = undefined
        loading.value = false
        showDialog.value = false
      }
    } else {
      showDialog.value = false
      editId.value = undefined
      loading.value = false
    }
  }
  const _dialog = (dialog: string, id?: string) => {
    if (id) editId.value = id.toString()
    showDialog.value = true
  }
  const _delete = async (id: number) => {
    try {
      loading.value = true
      await api.remove<APIPublic>({ endpoint: `${endpoint}/${id}` })
      if (rows.value && rows.value.length > 0) {
        rows.value = rows.value.filter((r) => r.id !== id)
        await alertUpdated()
      }
    } catch (err: any) {
      await alertErrors(err.message)
    } finally {
      loading.value = false
    }
  }

  const title = computed(() =>
    form.value?.id
      ? `${i18n.global.t('form.edit')} Api Public`
      : `${i18n.global.t('form.register')} Api Public`
  )

  const _show = async (id: string) => {
    try {
      loading.value = true
      getParams.value = { endpoint: `${endpoint}/${id}` }
      form.value = await api.get(getParams.value)
    } catch (err: any) {
      await alertErrors(err.message)
    } finally {
      loading.value = false
    }
  }

  const _save = async () => {
    try {
      const data = Object.assign({}, form.value)
      if (form.value?.id) {
        getParams.value = {
          endpoint: `${endpoint}/${form.value?.id}`,
          data
        }
        await api.put(getParams.value)
      } else {
        getParams.value = { endpoint, data }
        await api.post(getParams.value)
      }
      await alertUpdated()
    } catch (err: any) {
      await alertErrors(err.message)
    } finally {
      loading.value = false
    }
  }

  return {
    rows,
    showDialog,
    editId,
    loading,
    form,
    title,
    _load,
    _dialog,
    _delete,
    _save,
    _show
  }
}
