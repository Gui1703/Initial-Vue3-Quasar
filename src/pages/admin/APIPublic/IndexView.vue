<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { columnBuilder } from 'src/models'
import { useAPiPublic } from 'src/composables'
import IndexLayout from 'layouts/admin/IndexLayout.vue'
import MForm from './FormView.vue'
import MTable from 'components/admin/table/MTable.vue'

const { rows, showDialog, editId, loading, _load, _dialog, _delete } =
  useAPiPublic()

onBeforeMount(async () => await _load())
</script>

<template>
  <index-layout title="API Public" v-model="showDialog">
    <template #content>
      <MTable
        :rows="rows"
        :columns="columnBuilder()"
        :loading="loading"
        @delete="_delete"
        @dialog="_dialog"
        has-edit
        has-delete
        has-register
        has-search
        has-filter
        has-column-filter
      />
    </template>
    <template #dialog>
      <MForm @close="_load" :id="editId" />
    </template>
  </index-layout>
</template>
