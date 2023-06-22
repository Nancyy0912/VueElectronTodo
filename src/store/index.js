import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks:[]
  },
  getters: {
  },
  mutations: {
    addTask(state,task){
      console.log("HI",task);
       state.tasks.push(task);
    }

  },
  actions: {
  },
  modules: {
  }
})
