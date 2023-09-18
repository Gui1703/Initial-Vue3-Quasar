<script setup lang="ts">
import MLanguage from 'components/language/MLanguage.vue'
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="flex items-center">
        <q-toolbar-title><strong>Login</strong> Admin</q-toolbar-title>

        <MLanguage />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
