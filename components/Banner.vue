<script setup lang="ts">
const emit = defineEmits(['modal'])
</script>

<template>
  <section class="bg-cover bg-no-repeat bg-fixed py-48 mdMax:py-16 mdMax:bg-[url(/img/bg_main.webp)] mdMax:bg-center">
    <div class="container flex flex-col items-center">
      <h1 class="text-white text-6xl mdMax:text-4xl text-center font-bold mb-8 font-serif">
        Комплексные услуги по <br class="mdMax:hidden">
        <span class="text-yellow-400">Аудиту</span> и <span class="text-yellow-400">Ведению</span> вашего сайта
      </h1>
      <div class="flex mdMax:flex-col items-center justify-center gap-2 mb-16">
        <div><span class="rounded-sm px-2 py-1 bg-sky-100">Аудит сайта</span></div>
        <div><span class="rounded-sm px-2 py-1 bg-sky-100">Ведение сайта</span></div>
        <div><span class="rounded-sm px-2 py-1 bg-sky-100">Тестирование сайта</span></div>
      </div>
      <button
        type="button"
        class="bg-emerald-600 hover:bg-emerald-800 text-white px-8 py-4 rounded-full w-80"
        @click="emit('modal')">
        Закажи консультацию
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
