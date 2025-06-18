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
      { length } = useValidation()

const suggestions = ref(null)

// const update = () => {
//   model.value = model.value.replace(/([^А-ЯЁ, а-яё, a-z, A-Z, -])/gi, "").replace(/--/g, "-").replace(/\n/g, " ")
//   emit('update:modelValue', model.value)

//   if(props.required){
//     emit('valid', length(model.value, 3, 255))
//   }
// }

const input = async () => {
  const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
        token = "0a2abc4829eb7f9ebb7e84f0204ef20ae6e68861"

  const data = await $fetch<IResponse>(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({
      query: model.value
    })
  })

  if(data.suggestions){
    suggestions.value = data.suggestions
  }
}

const choose = (object) => {
  model.value = object.value
  emit('update:modelValue', model.value)
  suggestions.value = null
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
      @input="input">

    <div
      v-if="invalid"
      class="form__error">
      {{ invalid }}
    </div>

    <div class="suggestions">
      <button
        v-for="(item, index) in suggestions"
        :key="'suggestion' + index"
        type="button"
        @click="choose(item)">
        {{ item.value }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.suggestions{
  @apply absolute top-full left-0 right-0 z-[2];
  @apply max-h-[200px] bg-white shadow;
  @apply flex flex-col overflow-y-auto;
  button{
    @apply px-4 py-2 text-tiny text-left;
    &:hover{
      @apply bg-indigo-600 text-white;
    }
  }
}
</style>