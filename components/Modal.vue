<script setup lang="ts">
const emit = defineEmits(['close'])

const isCenter = ref<boolean>(false),
      modal = ref(null),
      modalInner = ref(null),
      show = ref<boolean>(false)

const close = () => {
  show.value = false
  setTimeout(() => {
    emit('close')
  }, 500)
}

onMounted(() => {
  setTimeout(() => {
    if(modalInner.value.clientHeight + 50 < window.innerHeight){
      isCenter.value = true
    }
  }, 0)

  setTimeout(()=>{
    show.value = true
  }, 250)

  document.documentElement.style.overflow = 'hidden'
  document.documentElement.style.height = '100vh';
  document.documentElement.style.width = '100vw';
})

onBeforeUnmount(() => {
  show.value = false
  document.documentElement.style.overflow = 'auto'
  document.documentElement.style.height = 'auto';
  document.documentElement.style.width = 'auto';
})
</script>

<template>
  <div
    ref="modal"
    class="modal"
    :class="{
      'modal_show': show,
      'modal_center': isCenter
    }">
    <button class="modal__wrap" @click.prevent="close" />

    <div ref="modalInner" class="modal__inner">
      <button
        class="modal__close"
        @click.prevent="close">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>

      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal{
  $parent: &;
  @apply fixed left-0 top-0 h-full w-full;
  @apply flex items-start justify-center;
  @apply overflow-y-auto z-[999] p-4 bg-black/70;
  @apply xlMax:items-start;
  &__wrap{
    @apply absolute left-0 top-0 w-full h-full;
    @apply z-[1] opacity-0 duration-500 ease-in-out;
    &:hover{
      @apply bg-black/5;
    }
  }
  &__inner{
    @apply relative bg-white p-16 z-[2] opacity-0 max-w-full;
    @apply lgMax:py-12 lgMax:px-8;
    @apply mdMax:px-4;
    @apply translate-y-1/4 duration-500 ease-in-out;
    max-width: 600px;
  }
  &__close{
    @apply absolute right-4 top-4 text-2xl text-black/40;
    &:hover{
      path{
        @apply text-sky-600;
      }
    }
  }
  &_show{
    #{$parent}__inner{
      @apply opacity-100 translate-y-0;
    }
    #{$parent}__wrap{
      @apply opacity-100;
    }
  }
  &_center{
    @apply items-center;
  }
}

</style>