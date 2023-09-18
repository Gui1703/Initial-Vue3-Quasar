<script lang="ts" setup>
import { toRefs, withDefaults } from 'vue'
import { useRouter } from 'vue-router'
import { IconButton } from 'src/models'

const router = useRouter()
const emit = defineEmits(['emit-button'])
const props = withDefaults(defineProps<IconButton>(), {
  textColor: 'dark',
  redirectName: '',
  closePopUp: false,
  dense: false,
  rounded: false,
  condition: false
})
const { condition, redirectName } = toRefs(props)

const signOut = async () => {
  await router.replace({ name: 'landing' })
}
const handleClick = async () => {
  if (redirectName!.value) {
    if (redirectName!.value === 'signOut') {
      await signOut()
    } else await router.push({ name: redirectName!.value })
  } else {
    emit('emit-button')
  }
}
</script>

<template>
  <q-btn
    v-if="condition"
    @click="handleClick"
    flat
    :class="{
      'b-button__delete': isDelete,
      'b-button__edit': isEdit
    }"
    :text-color="textColor"
    :v-close-popup="closePopUp"
    :dense="dense"
    :icon="iconButton"
    :rounded="rounded"
  >
    <q-tooltip>{{ tip }}</q-tooltip>
  </q-btn>
</template>
