<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const viewport = useViewport()

const showMenu = ref<boolean>(false)

const goTo = (id: string, offset: number) => {
  const element = document.getElementById(id)
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  showMenu.value = false
}

const header = ref(null)

onClickOutside(header, () => {
  setTimeout(() => {
    showMenu.value = false
  }, 150)
})
</script>

<template>
  <header ref="header" class="fixed z-20 top-0 w-full bg-blue-900 text-white mdMax:min-h-16 mdMax:py-2">
    <div class="container flex justify-between items-center">
      <svg class="h-10 w-auto" width="807" height="499" viewBox="0 0 807 499" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M806.872 178.773V246.852L403.436 499L0 246.979V178.899L403.436 431.046L806.872 178.773ZM561.659 269.546L621.039 232.48C574.14 162.131 494.083 115.736 403.31 115.736C312.537 115.736 232.48 162.005 185.707 232.228H186.085C189.237 229.328 192.515 226.555 195.793 223.781C308.881 129.982 472.398 150.532 561.659 269.546ZM284.17 293.248C305.477 278.245 330.187 269.672 356.537 269.672C399.906 269.672 438.737 292.869 465.464 329.683L522.702 293.878C496.352 256.182 452.605 231.471 403.184 231.471C354.141 231.471 310.646 255.93 284.17 293.248ZM130.612 129.856C296.778 -1.63895 531.779 33.5356 656.97 208.148L657.853 209.409L719.377 171.082C651.927 68.0799 535.561 0 403.31 0C272.824 0 155.449 67.4495 87.4952 170.956C99.9765 157.718 116.114 141.329 130.612 129.856Z" fill="white"/></svg>

      <button
        type="button"
        class="text-3xl sm:hidden"
        @click="showMenu = !showMenu">
        <font-awesome-icon v-if="viewport.isLessThan('md') && showMenu" :icon="['fas', 'xmark']" />
        <font-awesome-icon v-else :icon="['fas', 'bars']" />
      </button>

      <nav class="navigation" :class="{'navigation__fixed': viewport.isLessThan('md') && showMenu}">
        <button
          type="button"
          @click="goTo('services', 0)">
          Услуги
        </button>
        <button
          type="button"
          @click="goTo('advatages', 100)">
          Преимущества
        </button>
        <button
          type="button"
          @click="goTo('testimonials', 0)">
          Отзывы
        </button>
        <button
          type="button"
          @click="goTo('faq', 100)">
          Есть вопросы?
        </button>

        <div v-if="viewport.isLessThan('md')" class="flex gap-8 pb-12 pt-8">
          <a href="https://vk.com/marugloba_pm" target="_blank">
            <FontAwesomeIcon :icon="['fab', 'vk']" />
          </a>
          <a href="http://t.me/marugloba_pm" target="_blank">
            <FontAwesomeIcon :icon="['fab', 'telegram']" />
          </a>
          <a href="mailto:marina.globa.1989@ya.ru" target="_blank">
            <FontAwesomeIcon :icon="['fas', 'envelope']" />
          </a>
        </div>

        <a v-if="viewport.isGreaterThan('md')" href="https://vk.com/marugloba_pm" target="_blank">
          <FontAwesomeIcon :icon="['fab', 'vk']" />
        </a>
        <a v-if="viewport.isGreaterThan('md')" href="http://t.me/marugloba_pm" target="_blank">
          <FontAwesomeIcon :icon="['fab', 'telegram']" />
        </a>
        <a v-if="viewport.isGreaterThan('md')" href="mailto:marina.globa.1989@ya.ru" target="_blank">
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.navigation{
  @apply flex items-center gap-4;
  @media (max-width: 768px) {
    @apply flex-col gap-6 fixed left-0 right-0 top-16 bg-blue-900;
    @apply duration-500 max-h-0 overflow-hidden;
    &__fixed{
      @apply max-h-96 pt-4;
    }
  }
  button{
    @apply uppercase px-2 py-4 mdMax:py-2 hover:bg-sky-600;
  }
  a{
    @apply text-2xl hover:text-sky-400 mdMax:text-3xl;
  }
}
</style>