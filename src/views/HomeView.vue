<template>
  <div class="home">
    <h3>Task Manager</h3>
    <button @click="openTaskForm()">Add New Task</button>
    <hr />
    <h3>Tasks</h3>
    <p>{{ tasks }}</p>
    <ul v-for="(task, index) in tasks" :key="index">
      <li>{{ task }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TaskForm from "@/components/TaskForm.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    TaskForm,
  },
  data() {
    return {
      task: null,
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.getTaskList;
    },
  },
  mounted() {
    this.tasks;
    let abc = window.api.node();
    console.log(abc);
  },

  methods: {
    openTaskForm() {
      let openTaskForm = "Hello World";
      window.api.send("new-window", openTaskForm);
      
    },
  },
};
</script>
