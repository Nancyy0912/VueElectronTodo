<template>
  <div class="home">
    <h3>Task Manager</h3>&nbsp;
    &nbsp;<v-btn class="ma-2" @click="openTaskForm()"> Open Task Form </v-btn>

    <hr />
    <h3>Tasks{{tasks}}</h3>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Tasks</th>
          <th class="text-left">Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task,index) in tasks" :key="index">
          <td class="text-left">{{ task }}</td>
          <td class="text-left">
            <v-btn class="ma-2" @click="deleteItem(index)"> Delete </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskForm from "@/components/TaskForm.vue";

export default {
  name: "HomeView",
  components: {
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
    // let abc = window.api.chrome();
    // let electron = window.api.electron();
    // console.log(abc, electron);
  },

  methods: {
    openTaskForm() {
      // let openTaskForm = "Hello World";
      this.$router.push("/task")
      // window.api.send("new-window", openTaskForm);
    },
    deleteItem(index) {
      this.$store.commit("deleteItem", index);
    },
  },
};
</script>
