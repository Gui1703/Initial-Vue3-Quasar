<script lang="ts" setup>
import { computed, toRefs, ref } from 'vue'
import { Field } from 'vee-validate'
import { Password } from 'src/models'

const emit = defineEmits(['update:modelValue'])
const isPwd = ref(true)
const props = defineProps<Password>()
const { label, name, modelValue } = toRefs(props)

const inputValue = computed({
  get() {
    return modelValue.value
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
<template>
  <Field
    v-model="inputValue"
    v-slot="{ errorMessage, value, field }"
    :name="name"
    type="password"
  >
    <q-input
      outlined
      v-bind="field"
      class="input"
      :type="isPwd ? 'password' : 'text'"
      :error-message="errorMessage"
      :error="!!errorMessage"
      :model-value="value"
      :label="label"
      @update:model-value="(v) => emit('update:modelValue', v)"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
  </Field>
</template>
