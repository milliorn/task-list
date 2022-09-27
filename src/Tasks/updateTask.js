import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const stringText = {
  icon: "success",
  taskAdded: "taskAdded",
  title: "Success!",
};

/* https://stackoverflow.com/a/52357953/11986604 */
const DEF_DELAY = 1000;

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));

/* Update */
const updateTask = (id) => {
  const text = prompt("Task Name");
  //const quantity = prompt("Quantity");
  const data = JSON.parse(localStorage.getItem(stringText.taskAdded));

  const localData = data.map((x) => {
    if (x.id === id) {
      /* add to end of the list */
      return {
        ...x,
        text: text,
        //quantity: quantity,
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

  /* this is to refresh the page but give enough time for alerts to show */
  (async () => {
    //Do some stuff
    await sleep(DEF_DELAY);
    //Do some more stuff
    window.location.reload();
  })();
};

export default updateTask;
