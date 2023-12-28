<template>
  <a
    class="tw-flex tw-no-underline tw-items-center tw-flex-col md:tw-flex-row tw-group"
    href="https://wa.me/5516996110114?text=Olá, estou interessado em discutir os serviços oferecidos pela BMDev. Você poderia me fornecer mais informações?"
    target="_blank"
    rel="noopener"
  >
    <div
      class="tw-transition-all tw-duration-200 tw-mb-5 md:tw-mb-0 md:tw-mr-5 tw-rounded-full tw-w-14 tw-h-14 md:tw-w-16 md:tw-h-16 group-hover:tw-scale-105 tw-bg-default-purple tw-flex tw-items-center tw-justify-center"
    >
      <img
        class="tw-transition-all tw-duration-200 tw-rotate-90 md:tw-rotate-0 group-hover:tw-translate-y-2 group-hover:md:tw-translate-x-2 group-hover:md:tw-translate-y-0"
        :src="img"
        width="32"
        height="32"
        alt="icone flecha"
      />
    </div>
    <div
      class="tw-transition-all tw-duration-200 text-primary group-hover:tw-scale-105 tw-border-b tw-border-white"
    >
      Vamos iniciar um projeto
    </div>
  </a>
</template>

<script setup lang="ts">
import img from 'src/assets/img/icons/arrow.svg';
</script>
