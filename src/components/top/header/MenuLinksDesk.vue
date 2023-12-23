<template>
  <div class="mld">
    <div
      class="mld__link"
      v-for="(item, index) in links_menu"
      :key="index"
      @click="scrollItens(item.link)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollItens } from 'src/utils/scrollItens';
import { UseLinks } from 'src/composables/links';

const links_menu = UseLinks();
</script>

<style lang="scss" scoped>
.mld {
  display: none;
}
@media (min-width: 768px) {
  .mld {
    display: flex;
    &__link {
      text-decoration: none;
      cursor: pointer;
      margin: 0 20px;
      color: #ffffff;
      opacity: 0.5;
      font-size: 18px;
      font-weight: 400;
      transition: all 0.2s ease-in-out;
      &:hover {
        opacity: 1;
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
      }
    }
  }
}
</style>
