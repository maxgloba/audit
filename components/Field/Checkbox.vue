<script lang="ts" setup>
interface IProps {
  modelValue: []
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  options: IOptions[]
}

const props = defineProps<IProps>(),
      uid = useId(),
      emit = defineEmits(['update:modelValue', 'valid']),
      model = ref([])

if(props.modelValue.length > 0){
  model.value = props.modelValue
}

const change = () => {
  emit('update:modelValue', model)

  if(model.value.length > 0){
    emit('valid', false)
  }
}

watch(() => props.modelValue, () => {
  model.value = props.modelValue
})
</script>

<template>
  <div class="form__field form__checkbox">
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
        type="checkbox"
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