import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// import { ref, onUnmounted } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyCPut0IxpvXDCPp4EOF1p3xWB9cgN44M_0",
  authDomain: "vue-todo-39f7a.firebaseapp.com",
  projectId: "vue-todo-39f7a",
  storageBucket: "vue-todo-39f7a.appspot.com",
  messagingSenderId: "975360042961",
  appId: "1:975360042961:web:e390857c96cf4c16ebe2f0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const tasksDB = collection(db, "tasks");
export default tasksDB;

// const tasksCollection = collection(db, "tasks");

// export const createTask = (task) => {
//   console.log("deneme");
//   return tasksCollection.add(task);
// };

// export const getTasks = async (id) => {
//   const task = await tasksCollection.doc(id).get();
//   return task.exists ? task.data() : null;
// };

// export const updateTask = (id, task) => {
//   return tasksCollection.doc(id).update(task);
// };
// export const deleteTask = (id) => {
//   return tasksCollection.doc(id).delete();
// };

// export const useLoadUsers = () => {
//   const tasks = ref([]);
//   const close = tasksCollection.onSnapshot((snapshot) => {
//     // eslint-disable-next-line no-const-assign
//     tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   });
//   onUnmounted(close);
//   return tasks;
// };
