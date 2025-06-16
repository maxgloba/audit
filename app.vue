<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | web-Audit` : 'web-Audit: крупнейший web-аудит цент Москвы.';
  }
})

const { y } = useWindowScroll()

const modal = ref<boolean>(false)
</script>

<template>
  <main class="pt-16">
    <Header />
    <NuxtImg
      class="fixed left-0 w-full h-auto -z-10 brightness-50"
      src="/img/bg-main.jpg"
      :style="{ top: y * -.5 + 'px' }" />
    <Banner />
    <Services />
    <Advantages />
    <Testimonials />
    <Faq />
    <Footer />
  </main>
</template>

<style lang="scss" scoped></style>