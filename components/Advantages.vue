<script setup lang="ts">
interface IAdvantage {
  title: string
  text: string
}

const { setModal } = useGlobalStore()

const items = ref<IAdvantage[]>([
  {
    title: 'Постоянная поддержка клиентов',
    text: 'Обеспечиваем сопровождение и техническую поддержку после завершения проекта, гарантируя долгосрочное сотрудничество.'
  },
  {
    title: 'Прозрачное ценообразование',
    text: 'Предоставляем четкие и понятные сметы без скрытых доплат, что позволяет клиентам планировать бюджет с максимальной уверенностью.'
  },
  {
    title: 'Использование современных инструментов',
    text: 'Применяем актуальные технологии и софт, что позволяет создавать инновационные и эффективные решения.'
  },
  {
    title: 'Гарантия качества',
    text: 'Мы тщательно контролируем каждый этап работы, обеспечивая высокое качество и надежность конечного результата.'
  },
  { 
    title: 'Быстрые сроки выполнения',
    text: 'Оптимизация процессов и профессиональная команда позволяют нам сдавать проекты в кратчайшие сроки без потери качества.'
  },
  {
    title: 'Индивидуальный подход',
    text: 'Мы внимательно изучаем потребности каждого клиента, чтобы предложить решения, максимально соответствующие его задачам и ожиданиям.'
  },
])
</script>

<template>
  <section id="advatages" class="bg-white">
    <div class="container">
      <h2 class="text-4xl text-center font-black font-serif mb-12">Наши преимущества</h2>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(item, index) in items"
          :key="'advatages' + index"
          class="relative flex gap-4 px-4 py-12 rounded-md"
          :class="{
            'bg-yellow-50': (index + 1) % 3 === 1,
            'bg-emerald-50': (index + 1) % 3 === 2,
            'bg-sky-50': (index + 1) % 3 === 0,
          }">
          <NuxtImg :src="`/img/a${index + 1}.png`" />
          <div>
            <h3 class="text-xl font-serif font-bold">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="bg-sky-600 hover:bg-sky-800 text-white px-8 py-4 rounded-full block mx-auto mt-12 w-80"
        @click="setModal(true)">
        Закажи консультацию
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
