<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>Task Manager</h3>
      <!-- <task-form></task-form> -->
      <button @click="openTaskForm()"> Add New Task </button>
    <hr>
    <h3>Tasks</h3>
    <ul>
      <li v-for='(item,index) in tasks' :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import { ipcRenderer } from 'electron'
import HelloWorld from '@/components/HelloWorld.vue'
import TaskForm from '@/components/TaskForm.vue';
// import { contextBridge } from 'electron'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TaskForm
  },
  data(){
    return {
      task:null
    }
  },
  computed:{
    tasks(){
      console.log(this.$store.state.tasks);
      return this.$store.state.tasks;
    }
  },

  methods:{
    addTask(){
      console.log(this.$store);
      this.$store.commit('addTask',this.task)
      this.task = null;
    },
    openTaskForm(){
      // console.log(window.ipcRenderer);
      // window.ipcRenderer.send('openTaskForm',"Hii")
      let openTaskForm = "Hello World"
      window.api.send(openTaskForm)
    }
    
    }
}
</script>
