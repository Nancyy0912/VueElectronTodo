import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  plugins: [createPersistedState()],
  state: {
    tasks: [],
  },
  getters: {
    getTaskList: function (state) {
      return state.tasks;
    },
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
      window.api.send('refresh-window', true);
    },
  },
  actions: {
    ADD_TASK: async function (context, task) {
      let tasks = context.state.tasks;
      tasks.push(task);
      context.commit("addTask", tasks);
    },
  },
  modules: {},
});
