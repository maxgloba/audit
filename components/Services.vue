<script setup lang="ts">
const { setModal } = useGlobalStore()
</script>

<template>
    <section id="services" class="bg-white py-32">
      <div class="container">
        <div class="grid grid-cols-3 gap-4">
          <div class="flex flex-col items-center text-center gap-8 px-4 py-12 rounded-md bg-yellow-200">
            <h3 class="font-serif font-black text-3xl">Тестирование сайта</h3>
            <p>Проверка работоспособности, исправления ошибок, обеспечение стабильности веб-ресурса.</p>
            <img src="/img/p1.png" >
            <button
              type="button"
              class="bg-yellow-500 hover:bg-yellow-600 text-white text-xl font-bold px-4 py-3 rounded-full w-40"
              @click="setModal(true)">
              заказать
            </button>
          </div>
          <div class="flex flex-col items-center text-center gap-8 px-4 py-12 rounded-md bg-emerald-200">
            <h3 class="font-serif font-black text-3xl">Технический аудит</h3>
            <p>Анализ кода, инфраструктуры, безопасности и производительности сайта для улучшения.</p>
            <img src="/img/p2.png" >
            <button
              type="button"
              class="bg-emerald-600 hover:bg-emerald-800 text-white text-xl font-bold px-4 py-3 rounded-full w-40"
              @click="setModal(true)">
              заказать
            </button>
          </div>
          <div class="flex flex-col items-center text-center gap-8 px-4 py-12 rounded-md bg-sky-200">
            <h3 class="font-serif font-black text-3xl">Юзабилити-аудит</h3>
            <p>Оценка удобства использования, навигации, взаимодействия пользователей с интерфейсом.</p>
            <img src="/img/p3.png" >
            <button
              type="button"
              class="bg-sky-600 hover:bg-sky-800 text-white text-xl font-bold px-4 py-3 rounded-full w-40"
              @click="setModal(true)">
              заказать
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped lang="scss"></style>
