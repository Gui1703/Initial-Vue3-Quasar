<script lang="ts" setup>
import { toRefs, withDefaults } from 'vue'
import { Button } from 'src/models'

const emit = defineEmits(['callback'])
const props = withDefaults(defineProps<Button>(), {
  colorBackground: 'primary',
  textColor: 'black',
  type: 'button',
  disable: false
})
const { label, loading, type } = toRefs(props)
</script>

<template>
  <q-btn
    :label="label"
    :type="type"
    :color="colorBackground"
    :text-color="textColor"
    :loading="loading"
    :disable="disable"
    @click="emit('callback')"
  />
</template>
