<script lang="ts" setup>
interface IProps {
  modelValue: string
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  required?: boolean
  validation?: string
  min?: number
  max?: number
  errTop?: boolean
}

const props = defineProps<IProps>(),
      uid = useId(),
      model = ref<string>(props.modelValue),
      emit = defineEmits(['update:modelValue', 'valid']),
      { length, company } = useValidation()

const update = () => {
  if(props.validation){
    model.value = model.value
                    .replace(/[^а-яА-Яa-zA-ZñÑ0-9\s\-\–—()#№&_+/]+/gi, "")
                    .replace(/\n/g, " ")
  } else {
    model.value = model.value
                    .replace(/[^А-ЯЁа-яёa-zA-Z0-9\s\-\–—()#№&_+/]+/gi, "")
                    .replace(/\n/g, " ")
  }

  model.value = model.value.replace(/^ /, "");
  model.value = model.value.replace(/ {2,}/g, " ");

  emit('update:modelValue', model.value)

  if(props.required){
    if(props.validation){
      emit('valid', company(model.value))
    } else {
      emit('valid', length(model.value, props.min, props.max))
    }
  }
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
      type="text"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :class="{'invalid': invalid}"
      :minlength="min"
      :maxlength="max"
      @input="update" >

    <div
      v-if="invalid"
      class="form__error"
      :class="{'form__error_top': errTop}">
      {{ invalid }}
    </div>
  </div>
</template>
