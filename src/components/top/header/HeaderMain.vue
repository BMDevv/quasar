<template>
  <div
    class="relative-position z-top bg-transparent text-white q-py-lg q-py-lg-xl"
  >
    <div class="row items-center">
      <LogoMain class="col-8 col-sm-2" />
      <HamburguerMain class="col" />
      <MenuLinksDesk class="col" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HamburguerMain from './HamburguerMain.vue';
import MenuLinksDesk from './MenuLinksDesk.vue';
import LogoMain from 'src/components/generics/LogoMain.vue';
</script>
