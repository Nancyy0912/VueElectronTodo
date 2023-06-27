<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>Task Manager</h3>
      <!-- <task-form></task-form> -->
      <button @click="openTaskForm()"> Add New Task </button>
    <hr>
    <h3>Tasks</h3>
    <p>{{tasks}}</p>
    <ul v-for='(task,index) in tasks' :key="index">
      <li  >{{task}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TaskForm from '@/components/TaskForm.vue';

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
      console.log(this.$store);
      return this.$store.getters.getTaskList;
    }
  },
  mounted(){
    console.log("mounted");
    this.tasks;
  },

  methods:{
    
    openTaskForm(){
      // console.log(window.ipcRenderer);
      // window.ipcRenderer.send('openTaskForm',"Hii")
      let openTaskForm = "Hello World"
      window.api.send(openTaskForm)
      // let abc = window.api.node();
    }
    
    }
}
</script>
