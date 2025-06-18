<script lang="ts" setup>
interface IProps {
  modelValue: string
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  required?: boolean
  max?: number
  size?: string
}

const props = defineProps<IProps>(),
      uid = useId(),
      emit = defineEmits(['update:modelValue', 'valid']),
      model = ref<string>(props.modelValue),
      { length } = useValidation()

const updateValue = () => {
  emit('update:modelValue', model.value.trim())

  if(props.required){
    emit('valid', length(model.value, 3, props.max || 500))
  }
}

watch(() => props.modelValue, () => {
  model.value = props.modelValue
})
</script>

<template>
  <div class="form__field">
    <label v-if="label" :for="'field_'+uid">
      {{ label }}
    </label>

    <textarea
      :id="'field_'+uid"
      v-model="model"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :class="{
        'invalid': invalid,
        [size]: size,
        '!h-52': !size,
      }"
      @input="updateValue" />

    <div v-if="invalid" class="form__error">{{ invalid }}</div>
  </div>
</template>

<style lang="scss" scoped>
.form__field{
  textarea{
    @apply resize-none py-2;
  }
  &_sm{
    textarea{
      @apply h-[100px];
    }
  }
}
</style>