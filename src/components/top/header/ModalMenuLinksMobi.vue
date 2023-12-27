<template>
  <div v-if="menuStore.open" class="mlb bg-dark absolute-top">
    <div class="container">
      <div
        @click="OpenAndScroll(item)"
        class="mlb__link text-primary text-weight-medium q-py-md"
        v-for="(item, index) in links_menu"
        :key="index"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from 'src/stores/menu';
import { UseLinks } from 'src/composables/links';
import { scrollItens } from 'src/utils/scrollItens';
const links_menu = UseLinks();
const menuStore = useMenuStore();

const OpenAndScroll = (item: { link: string }) => {
  menuStore.OPEN_MENU(false);
  scrollItens(item.link);
};
</script>

<style lang="scss" scoped>
.menu-animated-enter-active,
.menu-animated-leave-active {
  transition: all 0.1s ease-in-out;
}

.menu-animated-enter-from,
.menu-animated-leave-to {
  transform: translatey(-10px);
}

.mlb {
  z-index: 4;
  padding-top: 60px;
  &__link {
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.02);
    }
  }
}
@media (min-width: 768px) {
  .mlb {
    display: none;
  }
}
</style>
