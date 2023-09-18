<script setup lang="ts">
import { toRefs } from 'vue'
import { TableMobile } from 'src/models'
import MIconButton from 'components/buttons/MIconButton.vue'

const emit = defineEmits(['delete', 'dialog', 'selected-delete'])
const props = withDefaults(defineProps<TableMobile>(), {
  hasEdit: false,
  hasDelete: false
})
const { value, data, completeData } = toRefs(props)
</script>

<template>
  <div class="b-table__item b-table__id" v-if="value.name === 'id'">
    <span key="id">Id: {{ data }}</span>
  </div>
  <div class="b-table__item" v-else-if="value.format">
    <span class="b-table__label">{{ value.label }}: </span>
    <span class="b-table__data">{{ value.format(data) }}</span>
  </div>
  <div
    class="b-table__item b-button__actions"
    v-else-if="value.name === 'actions'"
  >
    <div class="row items-center justify-between full-width">
      <div>
        <MIconButton
          @emit-button="emit('dialog', 'edit', completeData.row.id)"
          icon-button="edit"
          :condition="hasEdit"
          dense
          close-pop-up
          is-edit
          tip="Edit"
          text-color="primary"
        />
        <MIconButton
          @emit-button="
            emit('delete', completeData.row.id, completeData.rowIndex)
          "
          icon-button="delete"
          :condition="hasDelete"
          dense
          close-pop-up
          is-delete
          tip="Deletar"
          text-color="negative"
        />
      </div>
    </div>
  </div>

  <div class="b-table__item" v-else>
    <span class="b-table__label">{{ value.label }}: </span>
    <span class="b-table__data">{{ data }}</span>
  </div>
</template>
<style lang="scss" scoped>
@import url('src/css/table.scss');
</style>
