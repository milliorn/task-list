import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const stringText = {
  icon: "success",
  text: "Task added!",
  taskAdded: "taskAdded",
  title: "Success!",
};

/* Create - item param is user input text */
const createTask = (setTasks, tasks) => (item) => {
  const id = uuidv4();
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */
  const newTask = { id, ...item };

  /* add user input task to the end of the task list */
  setTasks([...tasks, newTask]);

  /* https://sweetalert2.github.io/ */
  Swal.fire({
    icon: stringText.icon,
    text: stringText.text,
    title: stringText.title,
  });

  /* store tasks to storage */
  localStorage.setItem(
    stringText.taskAdded,
    JSON.stringify([...tasks, newTask])
  );
};

export default createTask;
