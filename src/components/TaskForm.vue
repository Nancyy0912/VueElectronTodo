<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>Task Manager</h3>
    <form @submit.prevent="addTask">
      <input type="text" v-model="task" placeholder="Add Task">

      <button type="submit"> Submit </button>
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
    }
  }
}
</script>
