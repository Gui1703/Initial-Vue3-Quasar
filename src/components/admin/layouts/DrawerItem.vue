<script lang="ts" setup>
import { DrawerItem } from 'src/models'

withDefaults(defineProps<DrawerItem>(), { disable: false })
</script>

<template>
  <q-item
    class="drawer__item"
    :to="{ name: link }"
    active-class="drawer__item--active"
    :disable="disable"
    exact
  >
    <q-item-section side>
      <q-icon :name="icon" color="white" />
    </q-item-section>
    <q-item-section>
      <div class="row align-center">
        <span class="item__text">{{ title }}</span>
      </div>
    </q-item-section>
  </q-item>
</template>
