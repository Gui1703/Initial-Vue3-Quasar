<script setup lang="ts">
import { toRefs, withDefaults } from 'vue'
import { TableTop } from 'src/models'

const emit = defineEmits(['dialog', 'update:model-value'])
const props = withDefaults(defineProps<TableTop>(), {
  haveRegister: true,
  haveFilter: true,
  disable: false
})
const { loading, modelValue } = toRefs(props)
</script>

<template>
  <div class="row items-center table-top">
    <div class="col-sm-10 col-8 q-pr-lg">
      <q-input
        v-if="haveSearch"
        outlined
        dense
        debounce="300"
        :model-value="modelValue"
        @update:model-value="(e) => emit('update:model-value', e)"
        :placeholder="$t('inputs.search')"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div class="col-sm col-4 row justify-end button">
      <q-btn
        v-if="haveRegister"
        :label="$t('buttons.register')"
        class="q-mr-sm"
        :loading="loading"
        text-color="white"
        color="primary"
        @click="emit('dialog', 'register')"
      />
    </div>
  </div>
</template>
