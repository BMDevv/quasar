<template>
  <div
    class="hamburguer column items-end relative-position"
    :class="{ 'hamburguer--active': menuStore.open }"
    @click="menuStore.OPEN_MENU(!menuStore.open)"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from 'src/stores/menu';

const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
.hamburguer {
  width: 28px;
  z-index: 2;
  span {
    background-color: #cb1bc4;
    height: 3px;
    margin: 1.5px 0;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    &:nth-child(1) {
      width: 26px;
    }
    &:nth-child(2) {
      width: 21px;
    }
    &:nth-child(3) {
      width: 26px;
    }
  }
}
.hamburguer--active {
  span {
    transition: all 0.2s ease-in-out;
    &:nth-child(1) {
      width: 26px;
      transform: rotate(-45deg) translate(-2px, 1.5px);
    }
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      width: 26px;
      transform: rotate(45deg) translate(-2px, -2px);
    }
  }
}
@media (min-width: 768px) {
  .hamburguer {
    display: none;
  }
}
</style>
