<script setup lang="ts">
const emit = defineEmits(['modal'])
</script>

<template>
  <section id="advatages" class="bg-white">
    <div class="container">
      <h2 class="text-4xl text-center font-black font-serif mb-12">Наши преимущества</h2>
      <div class="grid grid-cols-2 mdMax:grid-cols-1 gap-4">
        <div class="relative flex items-start gap-4 px-4 py-12 rounded-md bg-yellow-50">
          <div class="min-w-24 mdMax:min-w-16 mdMax:w-16">
            <img src="/img/a1.webp" class="w-full h-auto">
          </div>
          <div>
            <h3 class="text-xl font-serif font-bold">Постоянная поддержка клиентов</h3>
            <p>Обеспечиваем сопровождение и техническую поддержку после завершения проекта, гарантируя долгосрочное сотрудничество.</p>
          </div>
        </div>
        <div class="relative flex items-start gap-4 px-4 py-12 rounded-md bg-emerald-50">
          <div class="min-w-24 mdMax:min-w-16 mdMax:w-16">
            <img src="/img/a2.webp" class="w-full h-auto">
          </div>
          <div>
            <h3 class="text-xl font-serif font-bold">Прозрачное ценообразование</h3>
            <p>Предоставляем четкие и понятные сметы без скрытых доплат, что позволяет клиентам планировать бюджет с максимальной уверенностью.</p>
          </div>
        </div>
        <div class="relative flex items-start gap-4 px-4 py-12 rounded-md bg-sky-50">
          <div class="min-w-24 mdMax:min-w-16 mdMax:w-16">
            <img src="/img/a3.webp" class="w-full h-auto">
          </div>
          <div>
            <h3 class="text-xl font-serif font-bold">Использование современных инструментов</h3>
            <p>Применяем актуальные технологии и софт, что позволяет создавать инновационные и эффективные решения.</p>
          </div>
        </div>
        <div class="relative flex items-start gap-4 px-4 py-12 rounded-md bg-yellow-50">
          <div class="min-w-24 mdMax:min-w-16 mdMax:w-16">
            <img src="/img/a4.webp" class="w-full h-auto">
          </div>
          <div>
            <h3 class="text-xl font-serif font-bold">Гарантия качества</h3>
            <p>Мы тщательно контролируем каждый этап работы, обеспечивая высокое качество и надежность конечного результата.</p>
          </div>
        </div>
        <div class="relative flex gap-4 px-4 py-12 rounded-md bg-emerald-50">
          <div class="min-w-24 mdMax:min-w-16 mdMax:w-16">
            <img src="/img/a5.webp" class="w-full h-auto">
          </div>
          <div>
            <h3 class="text-xl font-serif font-bold">Быстрые сроки выполнения</h3>
            <p>Оптимизация процессов и профессиональная команда позволяют нам сдавать проекты в кратчайшие сроки без потери качества.</p>
          </div>
        </div>
        <div class="relative flex gap-4 px-4 py-12 rounded-md bg-sky-50">
          <div class="min-w-24 mdMax:min-w-16 mdMax:w-16">
            <img src="/img/a6.webp" class="w-full h-auto">
          </div>
          <div>
            <h3 class="text-xl font-serif font-bold">Индивидуальный подход</h3>
            <p>Мы внимательно изучаем потребности каждого клиента, чтобы предложить решения, максимально соответствующие его задачам и ожиданиям.</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="bg-sky-600 hover:bg-sky-800 text-white px-8 py-4 rounded-full block mx-auto mt-12 w-80"
        @click="emit('modal')">
        Закажи консультацию
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
