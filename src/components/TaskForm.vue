<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>Task Manager {{task}}</h3>
    <form>
      <input type="text" v-model="task" placeholder="Add Task">

      <button @click="addTask()"> Submit </button>
    </form>
    <!-- <hr>
    <h3>Tasks</h3>
    <ul>
      <li v-for='(item,index) in tasks' :key="index">{{item}}</li>
    </ul> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'task',
  components: {
  },
  data(){
    return {
      task:''
    }
  },
  computed:{
    // tasks(){
    //   console.log("task",this.$store.state.tasks);
    //   return this.$store.state.tasks;
    // }
  },
  // mounted(){
  //     this.$store.dispatch('getTasks')
  // }

  methods:{
    addTask(){
      console.log(this.task);
      // this.$store.dispatch('ADD_TASK',this.task)
      this.$store.commit('ADD_TASK',this.task)
      // this.task = null;
    }
  }
}
</script>
