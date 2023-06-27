import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  plugins: [createPersistedState()],
  state: {
    tasks: []
  },
  getters: {
    getTaskList: function (state) {
      console.log("getters",state);
      return state.tasks
    }
  },
  mutations: {
    ADD_TASK(state,task){
      console.log("HI",task);
      //  state.tasks = task;
       state.tasks.push(task);
    }

  },
  actions: {
    
    ADD_TASK: async function(context,task) {
      let tasks = context.state.tasks;
      tasks.push(task)
      console.log("action",task);
      context.commit('addTask',tasks);
    }
  },
  modules: {
  }
})
