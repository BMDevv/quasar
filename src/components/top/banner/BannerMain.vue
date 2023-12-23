<template>
  <header class="banner">
    <div class="container">
      <div class="banner__box-one">
        <HeaderMain />
        <TextBanner />
      </div>
      <div
        class="banner__box banner_animated absolute-top"
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
@keyframes banner-animation {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 12px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
.banner_animated {
  animation: banner-animation 4s ease-in-out infinite;
}
.banner {
  z-index: 3;
  padding-bottom: 40px;
  position: relative;

  &__box {
    background-image: url('src/assets/img/banners/banner-mob.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;

    z-index: 1;
    box-shadow: inset 0px 0px 30px 10px #0c0c0c;
  }

  .container {
    position: relative;
  }
}

@media (min-width: 376px) {
  .banner {
  }
}
@media (min-width: 768px) {
  .banner {
    height: 457px;
    &__box {
      background-image: url('src/assets/img/banners/banner-desk.png');
      background-position: 72%;

      background-size: 985px;
    }
  }
}
@media (min-width: 1024px) {
  .banner {
    height: 631px;
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
