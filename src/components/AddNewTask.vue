<template>
  <div>
    <h4>Add new Task</h4>
    <form @submit.prevent="createNewTask" class="flex-row">
      <input
        type="text"
        class="form-control"
        v-model="description"
        placeholder="Add new task"
        required
      />
      <button type="submit" class="btn btn-success mt-2">Ekle</button>
    </form>
  </div>
</template>

<script>
import tasks from "../firebase";
import { addDoc } from "@firebase/firestore";
export default {
  data() {
    return {
      creationTime: Date.now(),
      description: "",
      completed: false,
    };
  },
  methods: {
    async createNewTask() {
      await addDoc(tasks, this.$data);
      this.$router.go();
    },
  },
};
</script>

<style></style>
