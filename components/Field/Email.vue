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
      uid = useId(),
      model = ref<string>(props.modelValue),
      emit = defineEmits(['update:modelValue', 'valid']),
      { email } = useValidation()

const updateValue = () => {
  model.value = model.value.trim()
  emit('update:modelValue', model.value)

  if(props.required){
    emit('valid', email(model.value))
  }
}

watch(() => props.modelValue, () => {
  model.value = props.modelValue
})
</script>

<template>
  <div class="form__field">
    <label v-if="label" :for="'field_'+uid">{{ label }}</label>

    <input
      :id="'field_'+uid"
      v-model="model"
      type="email"
      maxlength="255"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :class="{'invalid': invalid}"
      @input="updateValue">

    <div v-if="invalid" class="form__error">{{ invalid }}</div>
  </div>
</template>
