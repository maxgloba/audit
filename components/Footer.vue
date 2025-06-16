<script setup lang="ts"></script>

<template>
  <footer class="bg-black text-white">
    <div class="container flex flex-col justify-center items-center gap-4 py-8">
      <div class="px-4 h-12 border border-white flex justify-center items-center">Web Audit</div>
      <nav class="flex gap-4 text-white/70">
        <nuxt-link to="#services">services</nuxt-link>
        <nuxt-link to="#testimonials">testimonials</nuxt-link>
        <nuxt-link to="#advatages">advatages</nuxt-link>
        <nuxt-link to="#faq">faq</nuxt-link>
      </nav>
      <nav class="flex gap-4 text-3xl text-white/70">
        <nuxt-link to="https://vk.com/marugloba_pm">
          <FontAwesomeIcon :icon="['fab', 'vk']" />
        </nuxt-link>
        <nuxt-link to="http://t.me/marugloba_pm">
          <FontAwesomeIcon :icon="['fab', 'telegram']" />
        </nuxt-link>
        <nuxt-link to="mailto:marina.globa.1989@ya.ru">
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
        </nuxt-link>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
