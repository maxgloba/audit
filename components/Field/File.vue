<script lang="ts" setup>
interface IProps {
  modelValue: string
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  required?: boolean
}

const props = defineProps<IProps>(),
      uid = useId()

const files = ref(),
      images = ref([]),
      emit = defineEmits(['update', 'valid'])

const change = async (event: Event): Promise<void> => {
  files.value = (event.target as HTMLInputElement).files as FileList

  let errorMessage: string | boolean = false

  if( files.value.length > 3 ){
    errorMessage = 'Можно прикрепить не более 3-х файлов'
  }
  
  if( Object.values(files.value).find((file: any) => file.size > 1000000) ){
    errorMessage = 'Размер файла слишком большой.'
  }

  if(errorMessage){
    emit('valid', errorMessage)
    setTimeout(() => {
      emit('valid', false)
    }, 2000)
    return
  }

  for(const file of files.value){
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      images.value.push(reader.result)
    }
  }

  emit('update', images.value)
}

watch(() => props.modelValue, (newValue) => {
  if(newValue === ''){
    files.value = ''
    images.value = []
  }
})
</script>

<template>
  <div class="form__field form__files">
    <input
      :id="'field_'+uid"
      type="file"
      accept="image/jpeg"
      :class="{'invalid': invalid}"
      multiple
      @change="change">

    <label
      v-if="label"
      :for="'field_'+uid">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>
      <span>
        {{ label }}
      </span>
      <small>
        (Вы можете прикрепить до 3-х файлов формата .jpeg)
      </small>
    </label>

    <div
      v-if="images.length > 0"
      class="form__files-list">
      <img
        v-for="(image, index) in images"
        :key="`file_${index}`"
        :src="image"
        alt="">
    </div>

    <div
      v-if="invalid"
      class="form__error">
      {{ invalid }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form__files{
  @apply mb-4;
  [type=file]{
    @apply hidden;
  }
  label{
    @apply flex gap-4 lgMax:gap-2 flex-wrap;
    font-size: res(15, 18);
    svg, span{
      @apply transition-[0.3s] duration-[ease];
    }
    svg{
      @apply w-5 h-auto;
    }
    span{
      @apply border-b border-indigo-600 block relative;
    }
    small{
      @apply text-neutral-400 pt-1.5 -ml-2;
      font-size: res(10, 12);
    }
    &:hover{
      @apply cursor-pointer;
      span{
        @apply text-indigo-600;
      }
      svg{
        @apply fill-indigo-600;
      }
    }
  }
  &-list{
    @apply text-base text-indigo-600 mt-4;
    @apply flex gap-1;
    img{
      @apply w-10 h-auto border border-indigo-600 block;
    }
  }
  &.form__error{
    @apply left-5;
  }
}
</style>