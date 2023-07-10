<template>
  <div class="home">
    <v-sheet width="300" class="mx-auto">
    <v-form>
      <v-text-field
        v-model="task"
        :rules="rules"
        label="Add Task"
      ></v-text-field>
      <v-btn type="submit" @click="addTask()" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
  </div>
</template>

<script>
// @ is an alias to /src
// import "@fullcalendar/core/vdom";
// import FullCalendar from "@fullcalendar/vue3";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import Enter from '@/components/Enter.vue';

export default {
  name: "task",
  components: {
    // FullCalendar,
    // Enter
  },
  data() {
    return {
      // plugins: [dayGridPlugin, interactionPlugin],
      task: "",
    };
  },
  computed: {
    tasks(){
      console.log("task",this.$store.state.tasks);
      return this.$store.state.tasks;
    }
  },
  // mounted(){
  //     this.$store.dispatch('getTasks')
  // }

  methods: {
    addTask() {
      console.log(this.task);
      // this.$store.dispatch('ADD_TASK',this.task)
      this.$store.commit("ADD_TASK", this.task);
      this.task = null;  
      this.$router.push('./')
    },
  },
};
</script>
