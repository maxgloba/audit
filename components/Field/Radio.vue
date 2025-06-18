<script lang="ts" setup>
interface IProps {
  modelValue: string | number
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  options: IOptions[]
}

const props = defineProps<IProps>(),
      uid = useId(),
      emit = defineEmits(['update:modelValue', 'valid']),
      model = ref<string | number>(props.modelValue)

model.value = props.modelValue

const change = () => {
  emit('update:modelValue', model.value)
}

watch(() => props.modelValue, () => {
  model.value = props.modelValue
})
</script>

<template>
  <div class="form__field form__radio">
    <label
      v-if="label"
      :for="'field_'+uid"
      :class="{'text-rose-600': invalid}">
      {{ label }}
      <span v-if="invalid" class="form__error">{{ invalid }}</span>
    </label>

    <div v-for="(option, index) in options" :key="uid+index">
      <input
        :id="'field_'+uid+index"
        type="radio"
        v-model="model"
        :value="option?.value"
        @change="change">

      <label :for="'field_'+uid+index">
        {{ option.text }}
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form{
  &__error{
    @apply relative ml-2;
  }
}
</style>