<script lang="ts" setup>
import DrawerItem from 'src/components/admin/layouts/DrawerItem.vue'
import MLanguage from 'components/language/MLanguage.vue'
import { useAdminLayout } from 'src/composables'

const { miniState, toggleLeftDrawer, drawerClick, logout } = useAdminLayout()
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="justify-between">
        <q-btn
          flat
          @click="toggleLeftDrawer"
          round
          dense
          icon="menu"
          color="white"
        />
        <q-separator />
        <div class="flex items-center q-col-gutter-md">
          <MLanguage />
          <q-icon
            name="logout"
            size="sm"
            @click="logout"
            class="cursor-pointer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      class="bg-primary"
      @click.capture="drawerClick"
      v-model="miniState"
      bordered
    >
      <q-list class="drawer__list">
        <q-item-label header class="list__title"
          ><strong>{{ $t('ambience') }}</strong> Admin</q-item-label
        >
        <DrawerItem icon="list" title="API Public" link="api-public" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
