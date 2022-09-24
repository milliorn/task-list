import Swal from "sweetalert2";

const stringText = {
  icon: "success",
  taskAdded: "taskAdded",
  text: "Task deleted!",
  title: "Success!",
};

/* Delete */
const deleteTask = (tasks, setTasks) => (id) => {
  /* filter out the task we deleted in a new array */
  const filterTask = tasks.filter((item) => item.id !== id);

  /* save our data from our new array to state */
  setTasks(filterTask);

  Swal.fire({
    icon: stringText.icon,
    text: stringText.text,
    title: stringText.title,
  });

  localStorage.setItem(stringText.taskAdded, JSON.stringify(filterTask));
};

export default deleteTask;
