<template>
  <div class="ListView">
    <AddNewTask />
    <TasksList />
  </div>
</template>
<script>
import AddNewTask from "../components/AddNewTask.vue";
import TasksList from "../components/TasksList.vue";
export default {
  name: "App",
  components: {
    AddNewTask,
    TasksList,
  },
};
</script>
<style></style>
