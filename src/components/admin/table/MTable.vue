<script setup lang="ts">
import { toRefs, ref } from 'vue'
import { useQuasar } from 'quasar'
import { columnFilter } from 'src/helpers'
import { TableProps } from 'src/models'
import Swal from 'src/boot/swal'
import MTableTop from 'components/admin/table/MTableTop.vue'
import MTableMobile from 'components/admin/table/MTableMobile.vue'
import MIconButton from 'components/buttons/MIconButton.vue'
import { i18n } from 'boot/i18n'

const emit = defineEmits(['delete', 'dialog'])
const props = withDefaults(defineProps<TableProps>(), {
  hasEdit: false,
  hasDelete: false,
  hasRegister: false,
  hasSearch: false,
  hasColumnFilter: false,
  hasFilter: false,
  disable: false
})
const { rows, columns, loading, hasFilter, disable } = toRefs(props)
const $q = useQuasar()
const filter = ref('')

const emitDelete = async (id: string, idx: number) => {
  await Swal.fire({
    icon: 'question',
    title: i18n.global.t('swalMessage.confirmDeletion'),
    showCancelButton: true,
    confirmButtonText: i18n.global.t('swalMessage.yes'),
    cancelButtonText: i18n.global.t('swalMessage.no'),
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.isConfirmed) emit('delete', id, idx)
  })
}
</script>

<template>
  <q-card>
    <q-table
      :grid="$q.screen.width < 850"
      :rows="rows"
      :columns="columns"
      :filter="filter"
      :rows-per-page-options="[20, 50, 100, 0]"
      row-key="id"
      :no-data-label="$t('resultData.noDataLabel')"
      :no-results-label="$t('resultData.resultData')"
    >
      <template v-slot:top>
        <MTableTop
          @dialog="emit('dialog')"
          v-model="filter"
          :have-filter="hasFilter"
          :loading="loading"
          :have-register="hasRegister"
          :have-search="hasSearch"
          :have-column-filter="hasColumnFilter"
          :options="columnFilter(columns)"
          :disable="disable"
        />
      </template>
      <template v-slot:item="props">
        <div class="col-12 q-pa-md b-table__row">
          <div v-for="(data, i) in columns" :key="i">
            <MTableMobile
              @delete="emitDelete"
              @dialog="(name, id) => emit('dialog', name, id)"
              :data="props.row[data.name]"
              :value="data"
              :complete-data="props"
              :has-edit="hasEdit"
              :has-delete="hasDelete"
            />
          </div>
        </div>
      </template>
      <template #body-cell-actions="props">
        <q-td :props="props" class="vertical-middle">
          <MIconButton
            @emit-button="emit('dialog', 'edit', props.row.id)"
            icon-button="edit"
            :condition="hasEdit"
            dense
            close-pop-up
            is-edit
            :tip="$t('buttons.edit')"
            text-color="primary"
          />
          <MIconButton
            @emit-button="emitDelete(props.row.id, props.rowIndex)"
            icon-button="delete"
            :condition="hasDelete"
            dense
            close-pop-up
            is-delete
            :tip="$t('buttons.delete')"
            text-color="negative"
          />
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>

<style lang="scss" scoped>
@import url('src/css/table.scss');
</style>
