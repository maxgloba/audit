<script setup lang="ts">
import { Mask } from "maska"

interface IProps {
  modelValue: string
  placeholder?: string
  autocomplete?: string
  label?: string
  invalid?: string | boolean
  required?: boolean
  focus?: boolean
}

const props = defineProps<IProps>(),
      uid = useId(),
      globalStore = useGlobalStore(),
      emit = defineEmits(['update:modelValue', 'valid']),
      model = ref<string>(props.modelValue),
      element = ref(null)

const errors = ref([
  'Поле не может быть пустым.',
  'Введите корректный номер телефона.',
  'Номер телефона должен содержать только цифры.',
  'Номер телефона слишком короткий.',
  'Номер телефона слишком длинный.',
  'Недопустимый формат номера телефона.',
  'Пожалуйста, введите действующий номер телефона.'
])

const country = ref<number>(0),
      countryList = ref()

const countries = ref([
  {
    name: "Russia",
    dialCode: "+7",
    isoCode: "RU",
    mask: '+7 (###) ###-##-##',
    flag: "https://hatscripts.github.io/circle-flags/flags/ru.svg"
  },
  {
    name: "Belarus",
    dialCode: "+375",
    isoCode: "BY",
    mask: "+375 (##) ###-##-##",
    flag: "https://hatscripts.github.io/circle-flags/flags/by.svg"
  },
  {
    name: "Kazakhstan",
    dialCode: "+77",
    isoCode: "KZ",
    mask: "+77 (###) ###-##-##",
    flag: "https://hatscripts.github.io/circle-flags/flags/kz.svg"
  },
  {
    name: "Armenia",
    dialCode: "+374",
    isoCode: "AM",
    mask: "+374 ##-###-###",
    flag: "https://hatscripts.github.io/circle-flags/flags/am.svg"
  },
  {
    name: "Kyrgyzstan",
    dialCode: "+996",
    isoCode: "KG",
    mask: "+996 (###) ###-###",
    flag: "https://hatscripts.github.io/circle-flags/flags/kg.svg"
  }
])

const chooseCountry = (index: number) => {
  country.value = index
  countryList.value.classList.toggle('countries__list_show')
  model.value = ''
}

const openCountries = () => {
  countryList.value.classList.toggle('countries__list_show')
}

const updateValue = () => {
  emit('update:modelValue', model.value.trim())

  const mask = new Mask({ mask: countries.value[country.value].mask })

  if(props.required){
    let errorMessage: string | boolean = false

    if(model.value.length === 0) errorMessage = errors.value[0]
    else if(!mask.completed(model.value)) errorMessage = errors.value[1]

    emit('valid', errorMessage)
  }
}

watch(() => props.modelValue, (newValue) => {
  if(newValue === ''){
    country.value = 0
    model.value = props.modelValue
    setTimeout(() => {
      emit('valid', false)
    }, 100)
  }
})

onMounted(() => {
  if(focus && globalStore.login){
    element.value.focus()
  }
})
</script>

<template>
  <div class="form__field z-10">
    <label
      v-if="label"
      :id="'field_'+uid">
      {{ label }}
    </label>

    <div class="form__field">
      <div class="countries">
        <button class="flex items-center gap-1" type="button" @click.prevent="openCountries">
          <img :src="countries[country].flag" :alt="countries[country].name">
        </button>
        <div ref="countryList" class="countries__list">
          <button
            v-for="(item, index) in countries"
            :key="item.name"
            class="flex items-center gap-1 px-[.7rem] py-[.35rem] hover:bg-indigo-600 hover:text-white"
            type="button"
            :disabled="country === index"
            @click.prevent="chooseCountry(index)">
            <img :src="item.flag" :alt="item.name">
            {{ item.dialCode }}
          </button>
        </div>
      </div>

      <input
        :id="'field_'+uid"
        ref="element"
        v-model="model"
        v-maska
        type="tel"
        :placeholder="countries[country].mask"
        :autocomplete="autocomplete"
        :required="required"
        :class="{'invalid': invalid}"
        :data-maska="countries[country].mask"
        :minlength="countries[country].mask.length"
        :maxlength="countries[country].mask.length"
        @input="updateValue" >
    </div>

    <div v-if="invalid" class="form__error">{{ invalid }}</div>
  </div>
</template>

<style lang="scss" scoped>
.countries{
  color: var(--zinc-900);
  font-size: 15px;
  position: absolute;
  left: .7rem;
  top: 50%;
  transform: translateY(-50%);
  height: 44px;
  display: flex;
  align-items: center;
  img{
    display: block;
    width: 25px;
    height: auto;
  }
  &__list{
    position: absolute;
    left: -.7rem;
    top: 100%;
    transition: .3s ease;
    overflow: hidden;
    max-height: 0px;
    opacity: 0;
    background: var(--zinc-100);
    display: flex;
    flex-direction: column;
    width: 90px;
    z-index: 20;
    &_show{
      max-height: 500px;
      opacity: 1;
    }
  }
}
</style>
