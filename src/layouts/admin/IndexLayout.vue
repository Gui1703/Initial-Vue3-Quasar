<script lang="ts" setup>
import { onResize, IndexLayout } from 'src/models'

defineProps<IndexLayout>()
</script>

<template>
  <q-page class="b-container b-container__padding">
    <q-resize-observer @resize="onResize" />

    <q-card-section>
      <h4>{{ title }}</h4>
      <slot name="content"></slot>
    </q-card-section>

    <q-card-section>
      <q-dialog
        :model-value="modelValue"
        persistent
        maximized
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <slot name="dialog"></slot>
      </q-dialog>
    </q-card-section>
  </q-page>
</template>
