export default () => {
  const errors = [
    'Поле не может быть пустым',
    'Количество символов должно быть более ',
    'Количество символов должно быть не более ',
    'Введите корректный e-mail',
    'Подтвердите согласие, чтобы продолжить'
  ]

  const valid = (fields: IForm) => {
    return Object.values(fields).find(item => item.err || !item.val)
  }

  const length = (value: string | number, min: number, max: number) => {
    let errorMessage: string | boolean = false

    if(value.length === 0) errorMessage = errors[0]
    else if(value.length < min) errorMessage = errors[1] + min
    else if(value.length > max) errorMessage = errors[2] + max

    return errorMessage
  }

  const email = (value: string) => {
    // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const regex = /^(?!.*\.\.)(?!^\.)[A-ZÑa-zñ0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[A-ZÑa-zñ0-9!#$%&'*+\-/=?^_`{|}~]+)*@[A-ZÑa-zñ0-9-]+(?:\.[A-ZÑa-zñ0-9-]+)*\.[A-ZÑa-zñ]{2,}$/i;
    let errorMessage: string | boolean = false

    if(value.length === 0) errorMessage = "Поле не может быть пустым"
    else if(!regex.test(value)) errorMessage = "Введите корректный e-mail"

    return errorMessage
  }

  const password = (value: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-ZÑñ\d.,\-"'()«»!@#№$%^&*_+=?;:|\\/~><\[\]{}]{8,}$/;

    let errorMessage: string | boolean = false

    if(value.length < 8 || value.length > 64) errorMessage = "Длина пароля должна быть от 8 символов и до 64"
    else if(!regex.test(value)) errorMessage = "Пароль должен содержать не менее 8 символов, прописную букву, заглавную букву и цифру"

    return errorMessage
  }

  const company = (value: string) => {
    const regex: RegExp = /^[а-яА-Яa-zA-ZñÑ0-9\s\-\–—()#№&_+/]+$/;

    let errorMessage: string | boolean = false

    if(value.length < 1 || value.length > 256) errorMessage = 'error_company_1'
    else if(!regex.test(value)) errorMessage = 'error_company_2'

    return errorMessage
  }

  const agree = (value: boolean) => !value ? errors[4] : false

  return {
    valid,
    length,
    email,
    agree,
    password,
    company,
  }
}
