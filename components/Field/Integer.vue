<script lang="ts" setup>
interface IProps {
  modelValue: number | null
  placeholder?: string
  label?: string
  invalid?: string | boolean
  required?: boolean
  focus?: boolean
  min?: number
  max?: number
}

const props = defineProps<IProps>(),
      emit = defineEmits(['update:modelValue', 'valid']),
      { integer } = useValidation()

const uid = useId(),
      model = ref<number | null>(props.modelValue),
      element = ref(null)

const update = (event) => {
  let value = event.target.value.toString()
    .replace(/[^0-9.,]/g, '')
    .replace(',', '.')
    .replace(/(\..*?)\./g, '$1')

  model.value = value;
  emit('update:modelValue', model.value);

  if(props.required){
    emit('valid', integer(model.value, props.min || 0, props.max || 1000000))
  }
}

watch(() => props.modelValue, () => {
  model.value = props.modelValue
})

onMounted(() => {
  if(focus){
    element.value.focus()
  }
})
</script>

<template>
  <div class="form__field">
    <label
      v-if="label"
      :for="'field_'+uid">
      {{ label }}
    </label>

    <input
      :id="'field_'+uid"
      ref="element"
      v-model="model"
      type="text"
      :placeholder="placeholder"
      :required="required"
      :class="{'invalid': invalid}"
      :minlength="min"
      :maxlength="max"
      @input="update" >

    <div
      v-if="invalid"
      class="form__error">
      {{ invalid }}
    </div>
  </div>
</template>
