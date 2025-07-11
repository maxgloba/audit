<script setup lang="ts">
const goTo = (id: string, offset: number) => {
  const element = document.getElementById(id)
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}
</script>

<template>
  <footer class="bg-black text-white">
    <div class="container flex flex-col justify-center items-center gap-4 py-8">
      <svg class="h-10 w-auto" width="807" height="499" viewBox="0 0 807 499" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M806.872 178.773V246.852L403.436 499L0 246.979V178.899L403.436 431.046L806.872 178.773ZM561.659 269.546L621.039 232.48C574.14 162.131 494.083 115.736 403.31 115.736C312.537 115.736 232.48 162.005 185.707 232.228H186.085C189.237 229.328 192.515 226.555 195.793 223.781C308.881 129.982 472.398 150.532 561.659 269.546ZM284.17 293.248C305.477 278.245 330.187 269.672 356.537 269.672C399.906 269.672 438.737 292.869 465.464 329.683L522.702 293.878C496.352 256.182 452.605 231.471 403.184 231.471C354.141 231.471 310.646 255.93 284.17 293.248ZM130.612 129.856C296.778 -1.63895 531.779 33.5356 656.97 208.148L657.853 209.409L719.377 171.082C651.927 68.0799 535.561 0 403.31 0C272.824 0 155.449 67.4495 87.4952 170.956C99.9765 157.718 116.114 141.329 130.612 129.856Z" fill="white"/></svg>
      <nav class="flex gap-4 text-white/70">
        <button
          class="uppercase hover:text-sky-400"
          type="button"
          @click="goTo('services', 0)">
          Услуги
        </button>
        <button
          class="uppercase hover:text-sky-400"
          type="button"
          @click="goTo('advatages', 100)">
          Преимущества
        </button>
        <button
          class="uppercase hover:text-sky-400"
          type="button"
          @click="goTo('testimonials', 0)">
          Отзывы
        </button>
        <button
          class="uppercase hover:text-sky-400"
          type="button"
          @click="goTo('faq', 100)">
          Есть вопросы?
        </button>
      </nav>
      <nav class="flex gap-4 text-3xl text-white/70">
        <a
          class="text-2xl hover:text-sky-400"
          href="https://vk.com/marugloba_pm"
          target="_blank">
          <FontAwesomeIcon :icon="['fab', 'vk']" />
        </a>
        <a
          class="text-2xl hover:text-sky-400"
          href="http://t.me/marugloba_pm"
          target="_blank">
          <FontAwesomeIcon :icon="['fab', 'telegram']" />
        </a>
        <a
          class="text-2xl hover:text-sky-400"
          href="mailto:marina.globa.1989@ya.ru"
          target="_blank">
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
