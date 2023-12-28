<template>
  <header class="banner tw-z-10 tw-relative tw-pb-40">
    <div class="container tw-relative">
      <div class="banner__box-one">
        <HeaderMain />
        <TextBanner />
      </div>
      <div
        class="banner__box tw-shadow-[inset_0px_0px_30px_10px_#0c0c0c] tw-w-full tw-h-full tw-animate-banner-animation tw-bg-contain tw-absolute tw-top-0 tw-bg-no-repeat tw-bg-[url('src/assets/img/banners/banner-mob.png')] md:tw-bg-[url('src/assets/img/banners/banner-desk.png')]"
        id="button-mobile"
      ></div>
    </div>
    <ModalMenuLinksMobi />
  </header>
</template>

<script setup lang="ts">
import TextBanner from './TextBanner.vue';
import HeaderMain from 'src/components/top/header/HeaderMain.vue';
import ModalMenuLinksMobi from 'src/components/top/header/ModalMenuLinksMobi.vue';
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .banner {
    &__box {
      background-position: 72%;

      background-size: 985px;
    }
  }
}
@media (min-width: 1024px) {
  .banner {
    &__box {
      background-position: 75%;
      background-size: 1236px;
    }
  }
}

@media (min-width: 1280px) {
  .banner {
    &__box {
      background-position: 73%;
      height: 658px;
      background-size: 1433px;
    }
  }
}
</style>
