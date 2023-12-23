<template>
  <q-layout view="hHh lpR fFf" class="bg-dark">
    <BannerMain />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import BannerMain from 'src/components/top/banner/BannerMain.vue';
</script>
