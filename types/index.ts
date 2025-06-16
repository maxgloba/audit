export { };

declare global {
  interface IOptions {
    value?: string
    text: string
  }
  interface IFormString{
    val: string
    err: boolean | string
  }
  interface IFormNumber{
    val: number | null
    err: boolean | string
  }
  interface IFormBoolean {
    val: boolean
    err: boolean | string
  }
  interface IFormCheck {
    val: []
    err: boolean | string
  }
  interface IForm {
    email?:        IFormString
    password?:     IFormString
    password1?:    IFormString
    password2?:    IFormString
    name?:         IFormString
    phone?:        IFormString
    message?:      IFormString
    topic?:        IFormString
    file?:         IFormString
    coupon?:       IFormString
    agree?:        IFormBoolean
    notification?: IFormBoolean
    code?:         IFormString
    status?:       IFormString
    service?:      IFormCheck
    master?:       IFormString
    date?:         IFormString
    department?:   IFormString
    time?:         IFormString
    start?:        IFormString
    end?:          IFormString
    creation?:     IFormString
    callsDeny?:    IFormBoolean
    callsSuccess?: IFormBoolean
    address?:      IFormString
    number?:       IFormNumber
    entrance?:     IFormString
    floor?:        IFormString
    distance?:     IFormNumber
    weight?:       IFormNumber
    height?:       IFormNumber
    foot?:         IFormNumber
    sneakers?:     IFormNumber
    types?:        IFormString
    injuries?:     IFormString
    complaints?:   IFormString
    footTest?:     IFormString
    footPrint?:    IFormString
    footChara?:    IFormString
    testResults?:  IFormString
    running?:      IFormString
    shoes?:        IFormString
    recommendations?: IFormString
    startRunning?: IFormNumber
  }
  interface IResponse{
    status: 'error' | 'success'
    msg: string | any
  }
  interface IKeyString {
    [key: string]: string
  }

  interface IOption {
    id: string | number
    code: string
    title: string
    name?: string
    hint?: null
    sort?: string | number
    min?: number
    max?: number
    step?: number
    values?: IKeyString[]
  }

  interface IArticle {
    id:              string
    name:            string
    code:            string
    url:             string
    smallImage:      string
    mediumImage:     string
    bigImage:        string
    description:     string
    cut_description: string
    views:           null
    published:       string
    editLink:        string
    date:            string
    author:          string[]
  }

  interface IFavorite {
    catalog: number[]
    content: number[]
  }

  interface IInfoData {
    title?: string
    text: string
    links: IKeyString[]
    image: string
    slides: string[]
  }

  interface IConsultationOptions {
    departments: IKeyString[]
    times: null | IKeyString[]
  }

  interface IUser {
    id: string
    firstName?: string
    lastName?: string
    surName?: string
    age?: number
    phone?: string
    email?: string
    initials?: string
    role?: string
  }
}