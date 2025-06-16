<script setup lang="ts">
interface ITestimonial {
  name: string
  company: string
  text: string
}

const { setModal } = useGlobalStore()

const items = ref<ITestimonial[]>([
  {
    name: 'Алексей Иванов',
    company: 'ТехПро',
    text: 'Аудит помог выявить ключевые уязвимости в нашем ПО. Тестирование было проведено быстро и качественною. Рекомендуем для повышения надежности и безопасности.'
  },
  {
    name: 'Екатерина Смирнова',
    company: 'ИнноваСистем',
    text: 'Профессиональный аудит и тестирование позволили обнаружить и устранить ошибки на раннем этапе разработки. Работа выполнена на высоком уровне, сроки соблюдены.'
  },
  {
    name: 'Максим Петров',
    company: 'SoftSolutions',
    text: 'После аудита мы получили полный отчет с рекомендациями по улучшению. Тестирование подтвердило корректную работу основных функций, что повысило доверие клиентов.'
  },
  {
    name: 'Ольга Кузнецова',
    company: 'Диджитал Медиа',
    text: 'Аудит и тестирование прошли эффективно, выявлены скрытые баги и оптимизированы процессы. Специалисты понимают бизнес задачи и предлагают практичные решения. Результат оправдал все ожидания.'
  },
])
</script>

<template>
  <section id="advatages" class="bg-white py-32">
    <div class="container">
      <h2 class="text-4xl text-center font-black font-serif mb-12">Отзывы наших клиентов</h2>
      <div class="grid grid-cols-2 gap-4 gap-y-16">
        <div
          v-for="(item, index) in items"
          :key="'advatages' + index"
          class="relative">
          <NuxtImg
            class="w-24 h-auto mb-4"
            :src="`/img/t${index + 1}.png`" />
          <div>
            <h3 class="text-2xl text-sky-600 font-serif font-black">{{ item.name }}</h3>
            <p class="text-sm text-black/40 mb-2">{{ item.company }}</p>
            <p>
              <font-awesome-icon :icon="['fas', 'quote-left']" class="text-sky-600" />
              {{ item.text }}
              <font-awesome-icon :icon="['fas', 'quote-right']" class="text-sky-600" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
