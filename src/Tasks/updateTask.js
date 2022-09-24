import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const stringText = {
  icon: "success",
  taskAdded: "taskAdded",
  title: "Success!",
};

/* Update */
function updateTask() {
  return (id) => {
    const text = prompt("Task Name");
    const quantity = prompt("Quantity");
    const data = JSON.parse(localStorage.getItem(stringText.taskAdded));

    const localData = data.map((x) => {
      if (x.id === id) {
        /* add to end of the list*/
        return {
          ...x,
          text: text,
          quantity: quantity,
          id: uuidv4(),
        };
      }
      return x;
    });

    Swal.fire({
      icon: stringText.icon,
      text: "Task updated!",
      title: stringText.title,
    });

    localStorage.setItem(stringText.taskAdded, JSON.stringify(localData));
    window.location.reload();
  };
}

export default updateTask;
