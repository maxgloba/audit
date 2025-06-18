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
      class="fixed left-0 w-full h-auto -z-10 mdMax:hidden"
      src="/img/bg-main.jpg"
      :style="{ top: y * -.5 + 'px' }" >
    <Banner @modal="modal = true" />
    <Services @modal="modal = true" />
    <Advantages @modal="modal = true" />
    <Testimonials />
    <Faq />
    <Footer />
    <Modal v-if="modal" @close="modal = false">
      <Form @modal="modal = false" />
    </Modal>
  </main>
</template>

<style lang="scss" scoped></style>