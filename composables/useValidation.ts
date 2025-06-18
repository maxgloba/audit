export default () => {
  const errors = [
    'Поле не может быть пустым',
    'Количество символов должно быть более ',
    'Количество символов должно быть не более ',
    'Введите корректный e-mail',
    'Подтвердите согласие, чтобы продолжить',
    'Число должно быть более ',
    'Число должно быть не более ',
  ]

  const valid = (fields: IForm) => {
    return Object.values(fields).find(item => item.err)
  }

  const length = (value: string | number, min: number, max: number) => {
    let errorMessage: string | boolean = false

    if(value.length === 0) errorMessage = errors[0]
    else if(value.length < min) errorMessage = errors[1] + min
    else if(value.length > max) errorMessage = errors[2] + max

    return errorMessage
  }

  const integer = (value: number, min: number, max: number) => {
    let errorMessage: string | boolean = false

    if(!value) errorMessage = errors[0]
    else if(value < min) errorMessage = errors[5] + min
    else if(value > max) errorMessage = errors[6] + max

    return errorMessage
  }

  const email = (value: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    let errorMessage: string | boolean = false

    if(value.length === 0) errorMessage = errors[0]
    else if(!regex.test(value)) errorMessage = errors[3]

    return errorMessage
  }

  const agree = (value: boolean) => !value ? errors[4] : false

  const telegram = (value: string) => {
    const telegramErrors = [
      'Логин не может быть пустым',
      'Минимальная длина логина ',
      'Максимальная длина логина ',
      'Логин должен состоять из латинских букв, цифр и подчеркиваний',
      'Логин не может начинаться с цифры или подчеркивания',
      'Логин не может содержать подряд более одного подчеркивания',
      'Логин должен начинаться с символа "@"'
    ]

    let errorMessage: string | boolean = false
    const min = 5
    const max = 32

    if(!value) errorMessage = telegramErrors[0]
    else if(value[0] !== '@') errorMessage = telegramErrors[6]
    else {
      const login = value.slice(1)  // убираем @ для валидации
      if(login.length === 0) errorMessage = telegramErrors[0]
      else if(login.length < min) errorMessage = telegramErrors[1] + min
      else if(login.length > max) errorMessage = telegramErrors[2] + max
      else if (!/^[a-zA-Z0-9_]+$/.test(login)) errorMessage = telegramErrors[3]
      else if (/^[0-9_]/.test(login)) errorMessage = telegramErrors[4]
      else if (/__/.test(login)) errorMessage = telegramErrors[5]
    }

    return errorMessage
  }

  const fio = (value: string): string | boolean => {
    const fioErrors = [
      'ФИО не может быть пустым',
      'Минимальная длина ФИО 2 символа',
      'Максимальная длина ФИО 256 символов',
      'ФИО должно состоять из русских или латинских букв, пробелов и дефисов',
      'ФИО должно содержать от 2 до 3 слов',
      'Слова ФИО могут содержать только одну дефис',
      'Слова ФИО не могут начинаться или заканчиваться дефисом'
    ]

    if (!value) return fioErrors[0]

    const maxLen = 256

    const trimmedValue = value.trim()

    if (trimmedValue.length > maxLen) return fioErrors[2]

    // Проверяем разрешенные символы (русские, латинские буквы, пробел и дефис)
    if (!/^[А-ЯЁа-яёA-Za-z\s-]+$/.test(trimmedValue)) return fioErrors[3]

    // Разбиваем на слова по пробелам
    const parts = trimmedValue.split(/\s+/)

    for (const part of parts) {
      // Проверяем, чтобы в слове не было более одного дефиса
      const dashCount = (part.match(/-/g) || []).length
      if (dashCount > 1) return fioErrors[5]

      // Слово не должно начинаться или заканчиваться дефисом
      if (/^-|-$/.test(part)) return fioErrors[6]
    }

    return false
  }

  return {
    valid,
    length,
    email,
    agree,
    integer,
    telegram,
    fio,
  }
}
