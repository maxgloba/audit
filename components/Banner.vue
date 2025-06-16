<script setup lang="ts">
const { setModal } = useGlobalStore()
</script>

<template>
  <section class="bg-cover bg-no-repeat bg-fixed py-48">
    <div class="container flex flex-col items-center">
      <h1 class="text-white text-6xl text-center font-bold mb-8 font-serif">
        Комплексные услуги по <br>
        <span class="text-yellow-400">тестированию</span> и <span class="text-yellow-400">аудиту</span>
        вашего сайта
      </h1>
      <div class="flex items-center justify-center gap-2 mb-16">
        <div><span class="rounded-sm px-2 py-1 bg-sky-100">Тестирование сайта | QA</span></div>
        <div><span class="rounded-sm px-2 py-1 bg-sky-100">Технический аудит | front-end</span></div>
        <div><span class="rounded-sm px-2 py-1 bg-sky-100">Ведение сайта | management</span></div>
      </div>
      <button
        type="button"
        class="bg-emerald-600 hover:bg-emerald-800 text-white px-8 py-4 rounded-full w-80"
        @click="setModal(true)">
        Закажи консультацию
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
