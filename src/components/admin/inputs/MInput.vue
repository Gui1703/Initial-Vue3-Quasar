<script lang="ts" setup>
import { computed, toRefs, withDefaults } from 'vue'
import { Field } from 'vee-validate'
import { Input } from 'src/models'

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<Input>(), {
  disable: false,
  readonly: false
})
const { label, type, name, placeholder, modelValue } = toRefs(props)

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
    :type="type"
  >
    <q-input
      outlined
      v-bind="field"
      class="input"
      :readonly="readonly"
      :type="type"
      :error-message="errorMessage"
      :error="!!errorMessage"
      :model-value="value"
      :label="label"
      :disable="disabled"
      :placeholder="placeholder"
      @update:model-value="(v) => emit('update:modelValue', v)"
    >
      <template v-slot:append>
        <slot name="icon" />
      </template>
    </q-input>
  </Field>
</template>

<style lang="scss" scoped>
.input {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>
