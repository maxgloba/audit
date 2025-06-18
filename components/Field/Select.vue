<script lang="ts" setup>
interface IOptions {
  value?: string
  text: string
}

interface IProps {
  modelValue: string | number
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  required?: boolean
  options: IOptions[]
}

const props = defineProps<IProps>(),
      uid = useId(),
      emit = defineEmits(['update:modelValue'])

const updateValue = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="form__field">
    <label v-if="label" :for="'field_'+uid">{{ label }}</label>

    <select
      :id="'field_'+uid"
      :value="props.modelValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :class="{'invalid': invalid}"
      @input="updateValue($event.target.value)">
      <option
        v-for="(option, index) in options"
        :key="`option_${uid}_${index}`"
        :value="option?.value">
        {{ option.text }}
      </option>
    </select>

    <div v-if="invalid" class="form__error">{{ invalid }}</div>
  </div>
</template>
