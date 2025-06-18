<script setup lang="ts">
interface IProps {
  list?: string[]
  range?: boolean
  rangeType?: string
}

const props = defineProps<IProps>(),
      dayjs = useDayjs(),
      emit = defineEmits(['update', 'updateRange', 'updateDate']),
      config = useRuntimeConfig().public

const date = ref(),
      days = ref<number[]>([]),
      model = ref<string>(''),
      modelEnd = ref<string>('')

const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс']

date.value = dayjs()
// model.value = date.value.format('YYYY-MM-DD')

const prev = () => {
  date.value = date.value.add(-1, 'month')
  emit('updateDate', {
    month: date.value.format('MM'),
    year:  date.value.format('YYYY'),
  })

  setDays()
}

const next = () => {
  date.value = date.value.add(1, 'month')
  emit('updateDate', {
    month: date.value.format('MM'),
    year:  date.value.format('YYYY'),
  })

  setDays()
}

const getCurrent = (day: number) => {
  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `)
  if(itemDate.format('YYYY-MM-DD') == dayjs().format('YYYY-MM-DD')){
    return true
  }
  return false
} 

const getInactive = (day: number) => {
  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `)
  
  if(itemDate.format('YYYY-MM-DD') == dayjs().format('YYYY-MM-DD')){
    return false
  }

  if(dayjs().diff(itemDate) > 0){
    return true
  }

  return false
}

const getExcludes = (day: number) => {
  if(!props.list){
    return false
  }

  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `)
  
  return props.list.includes(itemDate.format('YYYY-MM-DD'))
}

const getActive = (day: number) => {
  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `)
  
  if(itemDate.format('YYYY-MM-DD') === model.value){
    return true
  }

  return false
}

const getEnd = (day: number) => {
  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `)
  
  if(itemDate.format('YYYY-MM-DD') === modelEnd.value){
    return true
  }

  return false
}

const getRange = (day: number) => {
  if(!modelEnd.value){
    return false
  }

  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `),
        start = dayjs(model.value),
        end = dayjs(modelEnd.value)
  
  if(itemDate.diff(start) > 0 && itemDate.diff(end) < 0){
    return true
  }

  return false
}

const setDays = () => {
  days.value = []

  const firstMonthDay = dayjs(date.value.format('YYYY-MM-01')).format('dd'),
        setNextMonth = dayjs(date.value.format('YYYY-MM-01')).add(1, 'month'),
        lastMonthDay = Number(setNextMonth.add(-1, 'day').format('DD'))

  for(let i = 1; i < weekDays.indexOf(firstMonthDay); i++){
    days.value.push(0)
  }

  for(let i = 0; i <= lastMonthDay; i++){
    days.value.push(i)
  }
}

setDays()

const setModel = (day: number) => {
  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `)

  if(props.range){
    const modelStart = dayjs(model.value),
          modelEndVal = dayjs(modelEnd.value)

    if(modelEnd.value){
      if(itemDate.diff(modelEndVal) > 0){
        modelEnd.value = itemDate.format('YYYY-MM-DD')
      } else {
        model.value = itemDate.format('YYYY-MM-DD')
        modelEnd.value = ''
      }
      emit('updateRange', {
        start: model.value,
        end: modelEnd.value,
      })
      return 
    }

    if(itemDate.diff(modelStart) > 0){
      modelEnd.value = itemDate.format('YYYY-MM-DD')
    } else {
      model.value = itemDate.format('YYYY-MM-DD')
      modelEnd.value = ''
    }
    emit('updateRange', {
      start: model.value,
      end: modelEnd.value,
    })
    return
  }

  model.value = itemDate.format('YYYY-MM-DD')
  emit('update', model.value)
}

const lecturesDates = ref()

if(props.rangeType && props.rangeType === 'club'){
  lecturesDates.value = await $fetch('/api/club', {
    query: {
      dates: true
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${config.token}`
    },
  })
}

const getPast = (day: number) => {
  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `)

  if(props.rangeType !== 'club'){
    return false
  }

  if(lecturesDates.value.past.includes(itemDate.format('YYYY-MM-DD'))){
    return true
  }

  return false
}

const getFuture = (day: number) => {
  const itemDate = dayjs(` ${date.value.format('YYYY')}-${date.value.format('MM')}-${day} `)

  if(props.rangeType !== 'club'){
    return false
  }

  if(lecturesDates.value.future.includes(itemDate.format('YYYY-MM-DD'))){
    return true
  }

  return false
}
</script>

<template>
  <div class="datepicker" :class="{'datepicker__club': rangeType === 'club'}">
    <div class="datepicker__head">
      <button
        class="datepicker__btn datepicker__btn-prev"
        type="button"
        @click.prevent="prev">
        <IconPrev class="w-4" />
      </button>
      
      {{ date.format('MMMM YYYY') }}

      <button
        class="datepicker__btn datepicker__btn-prev"
        type="button"
        @click.prevent="next">
        <IconNext class="w-4" />
      </button>
    </div>

    <div class="datepicker__month">
      <div
        v-for="(item, index) in weekDays"
        :key="'weekDays' + index"
        class="datepicker__weekday">
        {{ item }}
      </div>

      <div
        v-for="(item, index) in days"
        :key="'current' + index"
        class="datepicker__day"
        :class="{
          'datepicker__day-current': getCurrent(Number(item)),
          'datepicker__day-inactive': getInactive(Number(item)) || getExcludes(Number(item)),
          'datepicker__day-active': getActive(Number(item)) || getEnd(Number(item)),
          'datepicker__day-end': getEnd(Number(item)),
          'datepicker__day-past': getPast(Number(item)),
          'datepicker__day-future': getFuture(Number(item)),
          'datepicker__day-range': getRange(Number(item)),
        }"
        @click.prevent="setModel(Number(item))">
        <span>{{ item !== 0 ? item : '' }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.datepicker{
  @apply w-full;
  $parent: &;
  &__head{
    @apply flex gap-2 justify-between;
    @apply text-center text-[21px] font-bold leading-[50px];
  }
  &__btn{
    @apply px-4;
  }
  &__month{
    @apply grid grid-cols-7 gap-y-2.5;
    @apply text-center text-base;
  }
  &__weekday{
    @apply font-bold leading-[40px];
  }
  &__day{
    @apply cursor-pointer relative duration-200;
    $day: &;
    span{
      @apply flex justify-center items-center pointer-events-none;
      @apply w-[38px] h-[38px] rounded-full mx-auto duration-200;
    }
    &:hover{
      @apply text-black;
      span{
        @apply bg-neutral-200 text-black;
      }
    }
    &-current{
      @apply text-indigo-600 font-bold text-lg;
    }
    &-inactive{
      @apply text-black/40 pointer-events-none;
    }
    &-active{
      @apply text-white z-[2];
      span, &:hover span{
        background: var(--indigo-400) !important;
        color: var(--white) !important;
      }
      & + #{$day}-range, & + #{$day}-end{
        @apply z-[1];
        &:before{
          @apply w-full -left-1/2;
        }
      }
    }
    &-past, &-future{
      span{
        @apply relative;
        &:after{
          @apply content-[""] z-[1] rounded-full;
          @apply absolute w-3 h-3 top-[32px];
          //@apply border-[0.5px] border-white;
        }
      }
    }
    &-past{
      span:after{
        @apply bg-neutral-300;
      }
    }
    &-future{
      span:after{
        @apply bg-indigo-600;
      }
    }
    &-range{
      span{
        @apply text-white relative z-[2];
      }
      &:before, &:after{
        @apply content-[""] bg-indigo-300 h-full w-1/2;
        @apply absolute top-1/2 -translate-y-1/2;
      }
      &:before{
        @apply left-0;
      }
      &:after{
        @apply right-0;
      }
      &:nth-child(7n){
        &:after{
          @apply rounded-r-full;
        }
      }
      &:nth-child(7n + 1){
        &:before{
          @apply rounded-l-full;
        }
      }
    }
    &-end{
      &:before{
        @apply content-[""] bg-indigo-300 h-full w-1/2;
        @apply absolute top-1/2 -translate-y-1/2 left-0 -z-[1];
      }
      &:nth-child(7n + 1){
        &:before{
          @apply rounded-l-full;
        }
      }
    }
  }
  &__club{
    #{$parent}__day{
      &-inactive{
        @apply pointer-events-auto;
      }
    }
  }
}
</style>

<style lang="scss">
.datepicker{
  &__btn{
    &:hover{
      path{
        @apply stroke-indigo-300;
      }
    }
  }
}
</style>