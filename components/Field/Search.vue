<script lang="ts" setup>
interface IProps {
  modelValue: string
  placeholder: string
}

const props = defineProps<IProps>(),
      uid = useId(),
      model = ref<string>(props.modelValue),
      emit = defineEmits(['update:modelValue'])

const update = () => {
  model.value = model.value.replace(/([^А-ЯЁ, а-яё, a-z, A-Z, -])/gi, "").replace(/--/g, "-").replace(/\n/g, " ")
  emit('update:modelValue', model.value)
}

watch(() => props.modelValue, () => {
  model.value = props.modelValue
})
</script>

<template>
  <div class="form__field form__field-search">
    <input
      :id="'field_'+uid"
      v-model="model"
      type="search"
      :placeholder="placeholder"
      @input="update" >
  </div>
</template>

<style lang="scss" scoped>
.form__field-search{
  @apply relative;
  input{
    @apply pl-8 text-xl mdMax:text-base;
    background: url(/pic/search.svg) no-repeat left center/24px auto;
    border: none;
    border-bottom: 1px solid black;
  }
}
</style>