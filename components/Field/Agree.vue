<script lang="ts" setup>
interface IProps {
  modelValue: boolean
  placeholder?: string
  autocomplete?: string
  invalid?: string | boolean
  required?: boolean
}

const props = defineProps<IProps>(),
      uid = useId(),
      model = ref<boolean>(props.modelValue),
      emit = defineEmits(['update:modelValue', 'valid']),
      { agree } = useValidation()

const update = () => {
  emit('update:modelValue', model.value)

  if(props.required){
    emit('valid', agree(model.value))
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
      type="checkbox"
      :required="required"
      :class="{'invalid': invalid}"
      @change="update">

    <label :for="'field_'+uid">
      <slot />
    </label>

    <div
      v-if="invalid"
      class="form__error">
      {{ invalid }}
    </div>
  </div>
</template>
