<script setup lang="ts">
const emit = defineEmits(['modal'])
const expandId = ref<null | number>(null)
const expand = (val: number) => {
  expandId.value = expandId.value === val ? null : val
}
</script>

<template>
    <section id="services" class="bg-white py-32 mdMax:py-16">
      <div class="container">
        <div class="grid grid-cols-3 mdMax:grid-cols-1 gap-4">
          <div class="flex flex-col items-center text-center gap-8 mdMax:gap-4 px-4 py-12 rounded-md bg-emerald-200">
            <h3 class="font-serif font-black text-3xl">Аудит сайта</h3>
            <div class="relative">
              <p
                :class="{'line-clamp-4': expandId !== 1, 'line-clamp-none': expandId === 1}"
                class="transition-all duration-300">
                это комплексная проверка ресурса для выявления ошибок, недостатков и потенциала улучшения. В ходе аудита анализируются технические параметры, юзабилити, контент, SEO, безопасность и скорость загрузки.  Аудит полезен как для новых сайтов, так и для уже работающих проектов, которые хотят повысить результаты и избежать ошибок, влияющих на трафик и продажи.
              </p>
              <button
                @click="expand(1)"
                class="mt-2 text-emerald-600 hover:underline">
                {{ expandId === 1 ? 'Скрыть' : 'Подробнее' }}
              </button>
            </div>
            <img src="/img/p2.webp" class="mdMax:w-52 w-60">
            <button
              type="button"
              class="bg-emerald-600 hover:bg-emerald-800 text-white text-xl font-bold px-4 py-3 rounded-full w-40"
              @click="emit('modal')">
              заказать
            </button>
          </div>
          <div class="flex flex-col items-center text-center gap-8 mdMax:gap-4 px-4 py-12 rounded-md bg-sky-200">
            <h3 class="font-serif font-black text-3xl">Ведение сайта</h3>
            <div class="relative">
              <p
                :class="{'line-clamp-4': expandId !== 2, 'line-clamp-none': expandId === 2}"
                class="transition-all duration-300">
                это комплексная услуга по регулярному обновлению, поддержке и развитию вашего интернет-ресурса. В рамках ведения сайта выполняется создание и публикация актуального контента, техническая поддержка, оптимизация для поисковых систем (SEO), мониторинг работоспособности и безопасности, а также анализ поведения посетителей. Профессиональное ведение сайта помогает улучшить позиции в поисковиках, повысить конверсию и удержать интерес посетителей, что способствует росту бизнеса и укреплению онлайн-присутствия.
              </p>
              <button
                @click="expand(2)"
                class="mt-2 text-sky-600 hover:underline">
                {{ expandId === 2 ? 'Скрыть' : 'Подробнее' }}
              </button>
            </div>
            <img src="/img/p3.webp" class="mdMax:w-52 w-60">
            <button
              type="button"
              class="bg-sky-600 hover:bg-sky-800 text-white text-xl font-bold px-4 py-3 rounded-full w-40"
              @click="emit('modal')">
              заказать
            </button>
          </div>
          <div class="flex flex-col items-center text-center gap-8 mdMax:gap-4 px-4 py-12 rounded-md bg-yellow-200">
            <h3 class="font-serif font-black text-3xl">Тестирование сайта</h3>
            <div class="relative">
              <p
                :class="{'line-clamp-4': expandId !== 3, 'line-clamp-none': expandId === 3}"
                class="transition-all duration-300">
                это важный этап в разработке и поддержке веб-ресурса, который включает проверку работоспособности, удобства, безопасности и производительности сайта на разных устройствах и браузерах. Цель услуги — выявить и устранить ошибки, баги, а также обеспечить корректное отображение и функционал сайта. Качественное тестирование сайта помогает улучшить пользовательский опыт, повысить надежность ресурса и снизить риски потери клиентов из-за технических проблем.
              </p>
              <button
                @click="expand(3)"
                class="mt-2 text-yellow-600 hover:underline">
                {{ expandId === 3 ? 'Скрыть' : 'Подробнее' }}
              </button>
            </div>
            <img src="/img/p1.webp" class="mdMax:w-52 w-60">
            <button
              type="button"
              class="bg-yellow-500 hover:bg-yellow-600 text-white text-xl font-bold px-4 py-3 rounded-full w-40"
              @click="emit('modal')">
              заказать
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped lang="scss"></style>
