<script setup lang="ts">
import { onMounted } from 'vue'
import { crudSchema } from 'src/models'
import { useAPiPublic } from 'src/composables'
import FormLayout from 'layouts/admin/FormLayout.vue'
import MInput from 'components/admin/inputs/MInput.vue'

const { form, loading, _save, _show, title } = useAPiPublic()
const props = defineProps<{ id?: string }>()
const emit = defineEmits(['close'])

onMounted(async () => {
  if (props.id) await _show(props.id)
})

const save = () => {
  _save()
  emit('close')
}
const __closeDialog = () => {
  form.value = {}
  emit('close', 'no_update')
}
</script>

<template>
  <q-card class="full-width full-height column items-center container-form">
    <form-layout
      :title="title"
      :loading="loading"
      :schema="crudSchema()"
      @close="__closeDialog"
      @submit="save"
    >
      <template #content>
        <div class="row q-col-gutter-sm">
          <div class="col-12 col-sm-6">
            <MInput
              v-model="form.title"
              name="title"
              :label="$t('form.nameFieldColumnBuilder.title')"
              required
            />
          </div>
          <div class="col-12 col-sm-6">
            <MInput v-model="form.body" name="body" label="Body" required />
          </div>
        </div>
      </template>
    </form-layout>
  </q-card>
</template>
