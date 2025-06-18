<script lang="ts" setup>
interface IProps {
  modelValue: string
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  required?: boolean
  min?: number
  max?: number
  validation?: 'length' | 'telegram' | 'fio'
}

const props = defineProps<IProps>(),
      uid = useId(),
      model = ref<string>(props.modelValue),
      emit = defineEmits(['update:modelValue', 'valid']),
      { length, telegram, fio } = useValidation()

const update = () => {
  if (props.validation === 'telegram') {
    let val = model.value

    val = val.replace(/[^a-zA-Z0-9_@]/g, '')

    if (!val.startsWith('@')) {
      val = '@' + val.replace(/@/g, '')
    } else {
      val = '@' + val.slice(1).replace(/@/g, '')
    }

    val = val.replace(/__+/g, '_')

    model.value = val
  } else if (props.validation === 'fio') {
    let val = model.value

    val = val.replace(/[^А-ЯЁа-яёA-Za-z\s-]/g, '')
    val = val.replace(/\s+/g, ' ').replace(/-+/g, '-')
    val = val.replace(/^-|-$/g, '')

    model.value = val
  } else {
    model.value = model.value
      .replace(/([^А-ЯЁа-яёa-zA-Z-])/gi, "")
      .replace(/--+/g, "-")
      .replace(/\n/g, " ")
  }

  emit('update:modelValue', model.value)

  if (props.required) {
    if (props.validation === 'telegram') {
      emit('valid', telegram(model.value))
    } else if (props.validation === 'fio') {
      emit('valid', fio(model.value))
    } else {
      emit('valid', length(model.value, props.min || 1, props.max || 256))
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
      class="form__error">
      {{ invalid }}
    </div>
  </div>
</template>
