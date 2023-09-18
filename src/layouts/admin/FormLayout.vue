<script lang="ts" setup>
import { toRefs, ref, withDefaults } from 'vue'
import { Form } from 'vee-validate'
import { FormLayout } from 'src/models'
import MButton from 'components/buttons/MButton.vue'

const props = withDefaults(defineProps<FormLayout>(), {
  formLoginOrSignUp: false,
  loading: false
})
const { title, loading, schema, formLoginOrSignUp } = toRefs(props)
const error = ref<object>()
const emit = defineEmits(['close', 'submit'])
</script>

<template>
  <Form
    ref="form"
    v-slot="{ errors }"
    class="full-width full-height container-form"
    :validation-schema="schema"
    @submit="emit('submit')"
  >
    <input type="hidden" ref="error" v-bind="errors" />
    <div v-if="!formLoginOrSignUp">
      <q-card-section>
        <div class="flex justify-between">
          <div class="text-h6">{{ title }}</div>
          <q-btn
            @click="emit('close')"
            icon="close"
            flat
            round
            dense
            v-close-popup
          />
        </div>
      </q-card-section>

      <q-card-section>
        <slot name="content"></slot>
        <div class="q-gutter-md text-right q-mt-sm">
          <MButton
            :label="$t('buttons.save')"
            text-color="white"
            type="submit"
            :loading="loading"
          />
          <MButton
            :label="$t('buttons.cancel')"
            @callback="emit('close')"
            text-color="white"
          />
        </div>
      </q-card-section>
    </div>

    <slot name="content-user"></slot>
  </Form>
</template>
