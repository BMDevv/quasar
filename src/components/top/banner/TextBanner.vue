<template>
  <div class="tb column justify-end relative-position z-top">
    <div class="tb__line" />
    <h1 class="tb__title text-primary text-bold">
      Posso levar o seu <br />
      projeto para <span class="text-accent">o próximo nível</span> do mercado
      digital!
    </h1>
    <h2 class="tb__desc text-primary"></h2>
    <ButtonBanner />
  </div>
</template>

<script setup lang="ts">
import ButtonBanner from './ButtonBanner.vue';
</script>

<style lang="scss" scoped>
.tb {
  height: 580px;

  &__title {
    font-size: 31px;
    text-align: center;
    line-height: 1.4;
  }
  &__desc {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    line-height: 1.6;
    margin: 15px 0 25px 0;
    &::before {
      content: 'Criamos soluções digitais que atraem a atenção e impulsionam o seu sucesso.';
    }
  }
}
@media (min-width: 375px) {
  .tb {
    height: 640px;
    &__title {
      font-size: 36px;
    }
    &__desc {
      font-size: 16px;
    }
  }
}
@media (min-width: 425px) {
  .tb {
    height: 780px;
    &__title {
      font-size: 42px;
    }
    &__desc {
      font-size: 18px;
    }
  }
}
@media (min-width: 768px) {
  .tb {
    height: 340px;
    &__line {
      width: 66px;
      height: 5px;

      background: #c115c4;
      margin-bottom: 20px;
    }
    &__title {
      font-size: 33px;
      width: 425px;
      text-align: start;
    }
    &__desc {
      width: 500px;
      font-size: 16px;
      text-align: start;
      line-height: 1.4;
      &::before {
        content: 'Criamos soluções digitais que atraem a atenção e impulsionam o sucesso do seu negócio online.';
      }
    }
  }
}
@media (min-width: 1024px) {
  .tb {
    height: 450px;
    &__line {
      width: 83px;
      height: 6px;
      margin-bottom: 20px;
    }
    &__title {
      font-size: 43px;
      width: 553px;
    }
    &__desc {
      width: 553px;
      font-size: 18px;
      margin: 20px 0 35px 0;
    }
  }
}
</style>
