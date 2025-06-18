<script lang="ts" setup>
interface IProps {
  modelValue: string
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  required?: boolean
  min?: string
  max?: string
}

const props = defineProps<IProps>(),
      uid = useId(),
      model = ref<string>(props.modelValue),
      emit = defineEmits(['update:modelValue', 'valid'])

const update = () => {
  emit('update:modelValue', model.value)
}

watch(() => props.modelValue, () => {
  model.value = props.modelValue
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
      v-model="model"
      type="datetime-local"
      :min="min"
      :max="max"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :class="{'invalid': invalid}"
      @input="update">

    <div
      v-if="invalid"
      class="form__error">
      {{ invalid }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form__field{
  input{
    &:focus{
      @apply text-black;
    }
  }
}
</style>