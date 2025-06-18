<script setup lang="ts">
interface IFaq {
  question: string
  answer: string
}

const faqData: IFaq[] = [
  {
    question: 'Зачем нужно тестирование сайта?',
    answer: 'Тестирование выявляет ошибки, баги и неполадки, обеспечивая корректную работу сайта и удобство пользователей.',
  },
  {
    question: 'Какие виды тестирования существуют?',
    answer: 'Функциональное, нагрузочное, кроссбраузерное, юзабилити, безопасность и другие тесты для комплексной проверки.',
  },
  {
    question: 'Как часто нужно проводить тестирование?',
    answer: 'Рекомендуется регулярно, особенно после обновлений или внедрения новых функций.',
  },
  {
    question: 'Что входит в технический аудит сайта?',
    answer: 'Анализ кода, серверных настроек, безопасности, производительности и SEO аспектов.',
  },
  {
    question: 'Какой результат после технического аудита?',
    answer: 'Подробный отчет с выявленными проблемами и рекомендациями по их устранению.',
  },
  {
    question: 'Можно ли провести аудит на любом сайте?',
    answer: 'Да, технический аудит применим к сайтам любых размеров и направлений.',
  },
  {
    question: 'Что проверяет юзабилити-аудит?',
    answer: 'Удобство навигации, понятность интерфейса и комфорт взаимодействия пользователей.',
  },
  {
    question: 'Какие проблемы чаще всего обнаруживает юзабилити-аудит?',
    answer: 'Сложная навигация, неудобный дизайн, непонятные элементы и отсутствие адаптивности.',
  },
  {
    question: 'Чем полезен юзабилити-аудит для бизнеса?',
    answer: 'Повышает конверсию, снижает отказ пользователей и улучшает общий пользовательский опыт.',
  },
  {
    question: 'Что включает ведение сайта?',
    answer: 'Обновление контента, техническая поддержка, мониторинг и оптимизация работы сайта.',
  },
  {
    question: 'Зачем нужна регулярная поддержка сайта?',
    answer: 'Для предотвращения сбоев, защиты от угроз и своевреме�ного обновления информации.',
  },
  {
    question: 'Можно ли передать ведение сайта на аутсорсинг?',
    answer: 'Да, многие компании доверяют поддержку профессионалам для стабильной работы ресурса.',
  },
]

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="pb-24 mdMax:pb-12">
    <div class="container">
      <h2 class="text-4xl text-center font-black font-serif mb-12 mdMax:mb-8">Вопросы и ответы</h2>
      <div
        v-for="(item, index) in faqData"
        :key="index"
        class="border-b border-gray-300 py-4 cursor-pointer select-none"
        @click="toggle(index)"
      >
        <div class="flex justify-between items-center text-black">
          <span class="text-xl mdMax:text-base font-semibold font-serif">{{ item.question }}</span>
          <span class="text-2xl leading-none font-[Arial]">{{ openIndex === index ? '−' : '+' }}</span>
        </div>
        <p v-if="openIndex === index" class="mt-2 text-gray-700 text-sm leading-relaxed">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </section>
</template>

<style></style>
