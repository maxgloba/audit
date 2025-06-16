export const debug = (title: string, data: any) => {
  console.log('----------START ' + title)
  console.dir(data)
  console.log('----------END ' + title)
}