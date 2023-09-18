<script setup lang="ts">
import flagBrazil from 'src/assets/flags/flag_brasil.png'
import flagUsa from 'src/assets/flags/flag_eua.png'
import { useLanguage } from 'src/composables'
const { changeLanguage } = useLanguage()
</script>

<template>
  <div class="flex items-center">
    <q-avatar
      size="20px"
      class="language-button"
      @click="changeLanguage('pt-BR')"
    >
      <img :src="flagBrazil" />
    </q-avatar>
    <q-avatar
      size="20px"
      class="language-button"
      @click="changeLanguage('en-US')"
    >
      <img :src="flagUsa" />
    </q-avatar>
  </div>
</template>
