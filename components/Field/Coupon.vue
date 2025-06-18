<script lang="ts" setup>
interface IProps {
  modelValue: string
  placeholder?: string
  invalid?: string | boolean
  required?: boolean
}

const props = defineProps<IProps>(),
      uid = useId(),
      model = ref<string>(props.modelValue),
      emit = defineEmits(['update:modelValue', 'valid']),
      { length } = useValidation()

const update = () => {
  model.value = model.value.replace(/[^a-zA-Zа-яА-Я0-9]/g, '')
  emit('update:modelValue', model.value)

  if(props.required){
    emit('valid', length(model.value, 3, 255))
  }
}

watch(() => props.modelValue, () => {
  model.value = props.modelValue
})
</script>

<template>
  <div class="form__field">
    <input
      :id="'field_'+uid"
      v-model="model"
      type="text"
      :placeholder="placeholder"
      :required="required"
      :class="{'invalid': invalid}"
      @input="update" >

    <div
      v-if="invalid"
      class="form__error">
      {{ invalid }}
    </div>
  </div>
</template>
