<template>
  <a href="/" class="logo row">aa</a>
</template>

<style lang="scss" scoped>
.logo {
  background-image: url('../../assets/img/logo/logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 98px;
  min-height: 26px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }
}
@media (min-width: 1024px) {
  .logo {
    min-width: 133px;
    min-height: 35px;
  }
}
</style>
