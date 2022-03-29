<template>
  <div class="container">
    <div><h5>Tasks List</h5></div>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <li
            v-for="(task, i) in tasks"
            :key="task.id"
            class="list-group-item d-flex justify-content-between align-items-center mb-3"
          >
            {{ i + 1 + ":" }}
            {{ task.description }}
            <div class="justify-content-end">
              <!-- <button type="button" class="btn btn-primary rounded m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pen m-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
                  />
                </svg>
              </button> -->
              <button
                type="button"
                class="btn btn-danger rounded m-2"
                @click="deleteTask(task.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash m-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import tasksDB from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "TasksList",
  components: {},
  data() {
    return {
      tasks: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchTasks() {
      let tasksSnapshot = await getDocs(tasksDB);
      let tasksIn = [];
      tasksSnapshot.forEach((task) => {
        let taskData = task.data();
        taskData.id = task.id;
        tasksIn.push(taskData);
      });
      console.log(tasksIn);
      this.tasks = tasksIn;
    },
    async deleteTask(taskId) {
      let taskRef = doc(tasksDB, taskId);
      await deleteDoc(taskRef);
      alert("Task deleted successully!");
      this.$router.go();
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style></style>
