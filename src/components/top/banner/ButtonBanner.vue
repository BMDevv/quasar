<template>
  <a
    class="bb"
    href="https://wa.me/5516996110114?text=Olá, estou interessado em discutir os serviços oferecidos pela BMDev. Você poderia me fornecer mais informações?"
    target="_blank"
    rel="noopener"
  >
    <div class="bb__button">
      <img :src="img" width="32" height="32" alt="icone flecha" />
    </div>
    <div class="bb__text text-primary">Vamos iniciar um projeto</div>
  </a>
</template>

<script setup lang="ts">
import img from 'src/assets/img/icons/arrow.svg';
</script>

<style lang="scss" scoped>
.bb {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  &:hover &__button {
    transition: all 0.2s ease-in-out;

    img {
      transform: rotate(90deg) translateX(3px);
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover &__text {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
  }
  &__button {
    width: 54px;
    height: 54px;
    color: white;
    font-size: 24px;
    border-radius: 100%;
    background: #b810c3;
    margin-bottom: 20px;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      object-fit: contain;
      transform: rotate(90deg);
      transition: all 0.2s ease-in-out;
    }
  }
  &__text {
    border-bottom: 1px solid white;
    transition: all 0.2s ease-in-out;
  }
}
@media (min-width: 768px) {
  .bb {
    flex-direction: row;
    &:hover &__button {
      img {
        transform: rotate(0) translateX(3px);
      }
    }
    &__button {
      margin: 0 20px 0 0;
      width: 58px;
      height: 58px;
      img {
        object-fit: contain;
        transform: rotate(0);
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>
