<script lang="ts" setup>
const goHome = () => {
  window.location.href = '/'
}
</script>

<template>
    <section class="page page-error">
      <div class="container">
        <div class="error__copy">
          <div class="error__title">Ошибка 404</div>

          <div class="error__text">
            Ошибка 404 означает, что страница, которую вы искали, не существует. Возможно она была удалена, возможно Вы
            набрали неправильный адрес. <br><br>
            <button class="link link_w3" @click="goHome">
              На главную страницу
            </button>
          </div>

          <div class="error__copyright">Copyright © Спортмарафон.ru</div>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.error {
}
</style>
