<script setup lang="ts"></script>

<template>
  <section id="testimonials" class="bg-white py-32 mdMax:py-16">
    <div class="container">
      <h2 class="text-4xl text-center font-black font-serif mb-12 mdMax:mb-8">Отзывы наших клиентов</h2>
      <div class="grid grid-cols-2 mdMax:grid-cols-1 gap-4 gap-y-16 mdMax:gap-y-8">
        <div>
          <img class="w-24 h-auto mb-4 mdMax:mb-2" src="/img/t1.webp" >
          <div>
            <h3 class="text-2xl text-sky-600 font-serif font-black">Алексей Иванов</h3>
            <p class="text-sm text-black/40 mb-2">ТехПро</p>
            <p>
              <font-awesome-icon :icon="['fas', 'quote-left']" class="text-sky-600" />
              Аудит помог выявить ключевые уязвимости в нашем ПО. Тестирование было проведено быстро и качественною. Рекомендуем для повышения надежности и безопасности.
              <font-awesome-icon :icon="['fas', 'quote-right']" class="text-sky-600" />
            </p>
          </div>
        </div>
        <div>
          <img class="w-24 h-auto mb-4 mdMax:mb-2" src="/img/t2.webp" >
          <div>
            <h3 class="text-2xl text-sky-600 font-serif font-black">Екатерина Смирнова</h3>
            <p class="text-sm text-black/40 mb-2">ИнноваСистем</p>
            <p>
              <font-awesome-icon :icon="['fas', 'quote-left']" class="text-sky-600" />
              Профессиональный аудит и тестирование позволили обнаружить и устранить ошибки на раннем этапе разработки. Работа выполнена на высоком уровне, сроки соблюдены.
              <font-awesome-icon :icon="['fas', 'quote-right']" class="text-sky-600" />
            </p>
          </div>
        </div>
        <div>
          <img class="w-24 h-auto mb-4 mdMax:mb-2" src="/img/t3.webp" >
          <div>
            <h3 class="text-2xl text-sky-600 font-serif font-black">Максим Петров</h3>
            <p class="text-sm text-black/40 mb-2">SoftSolutions</p>
            <p>
              <font-awesome-icon :icon="['fas', 'quote-left']" class="text-sky-600" />
              После аудита мы получили полный отчет с рекомендациями по улучшению. Тестирование подтвердило корректную работу основных функций, что повысило доверие клиентов.
              <font-awesome-icon :icon="['fas', 'quote-right']" class="text-sky-600" />
            </p>
          </div>
        </div>
        <div>
          <img class="w-24 h-auto mb-4 mdMax:mb-2" src="/img/t4.webp" >
          <div>
            <h3 class="text-2xl text-sky-600 font-serif font-black">Ольга Кузнецова</h3>
            <p class="text-sm text-black/40 mb-2">Диджитал Медиа</p>
            <p>
              <font-awesome-icon :icon="['fas', 'quote-left']" class="text-sky-600" />
              Аудит и тестирование прошли эффективно, выявлены скрытые баги и оптимизированы процессы. Специалисты понимают бизнес задачи и предлагают практичные решения. Результат оправдал все ожидания.
              <font-awesome-icon :icon="['fas', 'quote-right']" class="text-sky-600" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
