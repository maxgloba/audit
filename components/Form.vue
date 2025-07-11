<script lang="ts" setup>
const success = ref(false),
      formNode = ref(null),
      { valid } = useValidation(),
      emit = defineEmits(['modal'])

const form = ref({
  name: {
    val: '',
    err: false,
  },
  phone: {
    val: '',
    err: false,
  },
  message: {
    val: '',
    err: false,
  },
})
const counter = ref(0)
const formSubmit = async () => {
  try {
    await $fetch('https://sport-marafon.ru/api/message', {
      method: 'GET',
      query: {
        name: form.value.name.val,
        phone: form.value.phone.val,
        message: form.value.message.val
      },
      retry: 0,
    })
  } catch (err) {
    console.error(err)
  } finally {
    success.value = true

    form.value.name.val = ''
    form.value.phone.val = ''
    form.value.phone.err = false
    form.value.message.val = ''
    formNode.value.reset()

    setTimeout(() => {
      success.value = true
      emit('modal')
    }, 4000)
  }
}
</script>

<template>
  <form
    ref="formNode"
    class="form flex flex-wrap justify-between gap-4"
    @submit.prevent="formSubmit">
    <FieldText
      v-model="form.name.val"
      :label="`Имя *`"
      :invalid="form.name.err"
      :required="true"
      @valid="form.name.err = $event" />

    <FieldPhone
      v-model="form.phone.val"
      label="Телефон *"
      :invalid="form.phone.err"
      :required="true"
      @valid="form.phone.err = $event" />

    <FieldTextarea
      v-model="form.message.val"
      label="Сообщение"
      :invalid="form.message.err"
      :required="false"
      @valid="form.message.err = $event" />

    <div class="form__field">
      <div v-if="success" class="bg-emerald-600 text-white text-center mb-4 p-4">Сообщение отправлено, мы скоро свяжемся с вами!</div>
      <button
        class="bg-sky-600 hover:bg-sky-800 text-white w-full h-14 uppercase"
        :disabled="valid(form)"
        type="submit">
        Отправить
      </button>
    </div>
  </form>
</template>

<style lang="scss">
.form{
  &__field{
    @apply w-full relative;
  }

  input, select, textarea {
    @apply block w-full h-11 px-4 py-0 bg-zinc-100;
    @apply text-black text-base;
    @apply transition-[border] duration-[0.3s] ease-[ease];
    @apply border-zinc-100 border-2 border-solid;
    &:focus {
      @apply border-indigo-600 bg-zinc-100;
    }
    &.invalid{
      @apply border-rose-600;
    }
    &:disabled{
      @apply bg-zinc-100 border-zinc-100;
      @apply cursor-default pointer-events-none text-black/40;
    }
    &[type=tel]{
      @apply pl-10;
    }
  }

  label{
    @apply text-black text-base;
  }

  &__error{
    @apply text-rose-600 leading-none;
    @apply absolute translate-y-0.5 top-full;
    font-size: 9px;
    @media(min-width:992px){
      font-size: 11px;
    }
  }
}
</style>