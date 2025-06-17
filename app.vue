<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | MG Audit` : 'MG Audit: крупнейший аудит цент для web-России.';
  }
})

const { y } = useWindowScroll()

const modal = ref<boolean>(false)
</script>

<template>
  <main class="pt-16">
    <Header />
    <img
      class="fixed left-0 w-full h-auto -z-10 brightness-50"
      src="/img/bg-main.jpg"
      :style="{ top: y * -.5 + 'px' }" >
    <Banner />
    <Services />
    <Advantages />
    <Testimonials />
    <Faq />
    <Footer />
  </main>
</template>

<style lang="scss" scoped></style>