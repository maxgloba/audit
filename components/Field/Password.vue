<script lang="ts" setup>
interface IProps {
  modelValue: string,
  placeholder?: string,
  autocomplete?: string,
  label?: string,
  required?: boolean,
  invalid?: string | boolean
}

const props = defineProps<IProps>(),
      uid = useId(),
      model = ref<string>(props.modelValue),
      emit = defineEmits(['update:modelValue', 'valid']),
      fieldType = ref<string>('password')

const changeType = () => {
  fieldType.value = fieldType.value === 'password' ? 'text' : 'password'
}

const updateValue = () => {
  model.value = model.value.trim()

  emit('update:modelValue', model.value)

  if(props.required){
    // TO DO <Добавить валидацию по наличию символов, min и max>
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
      :type="fieldType"
      v-model="model"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :class="{'invalid': invalid}"
      @input="updateValue" >

    <div v-if="invalid" class="form__error">{{ invalid }}</div>

    <button type="button" @click.prevent="changeType">
      <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.01809 4.84617C0.884249 4.71489 0.769927 4.59797 0.67663 4.5C0.769927 4.40203 0.884249 4.28511 1.01809 4.15383C1.4353 3.74462 2.03936 3.19874 2.78476 2.65358C4.28633 1.55537 6.30678 0.5 8.5 0.5C10.6932 0.5 12.7137 1.55537 14.2152 2.65358C14.9606 3.19874 15.5647 3.74462 15.9819 4.15383C16.1157 4.2851 16.2301 4.40203 16.3234 4.5C16.2301 4.59797 16.1157 4.7149 15.9819 4.84617C15.5647 5.25538 14.9606 5.80126 14.2152 6.34642C12.7137 7.44463 10.6932 8.5 8.5 8.5C6.30678 8.5 4.28633 7.44463 2.78476 6.34642C2.03936 5.80126 1.4353 5.25538 1.01809 4.84617Z" stroke="#979797"/><circle cx="8.5" cy="4.5" r="3" stroke="#979797"/><path d="M8 5L9.2 2L11 3.2L8 5Z" fill="#979797"/><line v-if="fieldType !== 'text'" x1="0.776393" y1="8.55279" x2="16.7764" y2="0.552786" stroke="#979797"/></svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.form__field{
  position: relative;
  button{
    display: block;
    position: absolute;
    z-index: 10;
    padding: 16px;
    background: none;
    border: none;
    right: 0;
    bottom: 0;
    svg{
      pointer-events: none;
    }
    path{
      fill: var(--dark-blue);
    }
  }
}
</style>