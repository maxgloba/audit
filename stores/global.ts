export const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    loader: <boolean>(false),
    modal: <boolean>(false),
  }),
  actions: {
    setLoader(value: boolean){
      this.loader = value
    },
    setModal(value: boolean){
      this.modal = value
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}