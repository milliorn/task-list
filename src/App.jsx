import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

import AddTaskItem from "./components/AddTaskItem";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const styles = {
  html: "box-border m-0 p-0",
  div: "container max-w-2xl mx-auto my-0 overflow-auto text-zinc-50 opacity-90 bg-zinc-900 p-7",
  h3: "mb-4 text-lg lg:mb-5 xl:mb-6 2xl:mb-7 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
  span: "text-xl leading-10",
};

const stringText = {
  h3: "Remaining Tasks: ",
  icon: "success",
  span: "Tasks will be  added here...",
  taskAdded: "taskAdded",
  title: "Success!",
};

function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  /* https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage */
  const getTasks = JSON.parse(localStorage.getItem(stringText.taskAdded));

  /* Read */
  useEffect(
    () => {
      if (getTasks == null) {
        setTasks([]);
      } else {
        setTasks(getTasks);
      }
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [] /* empty dependency is blank so we do not run continuously */
  );

  /* Create */
  const createTask = (item) => {
    const id = uuidv4();
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */
    const newTask = { id, ...item };

    setTasks([...tasks, newTask]);

    /* https://sweetalert2.github.io/ */
    Swal.fire({
      icon: stringText.icon,
      text: "Task added!",
      title: stringText.title,
    });

    /* store our task to the list */
    localStorage.setItem(
      stringText.taskAdded,
      JSON.stringify([...tasks, newTask])
    );
  };

  /* Delete */
  const deleteTask = (id) => {
    /* filter out the task we deleted in a new array */
    const filterTask = tasks.filter((item) => item.id !== id);

    /* save our data from our new array to state */
    setTasks(filterTask);

    Swal.fire({
      icon: stringText.icon,
      text: "Task deleted!",
      title: stringText.title,
    });

    localStorage.setItem(stringText.taskAdded, JSON.stringify(filterTask));
  };

  /* Update */
  const updateTask = (id) => {
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

  return (
    <div className={styles.html}>
      <div className={styles.div}>
        <Header
          showForm={() => setShowTask(!showTask)}
          updateColorText={showTask}
        />

        {/* If true switch over to form to add task */}
        {showTask && <AddTaskItem onSave={createTask} />}

        {/* Remaining Task */}
        <h3 className={styles.h3}>
          {stringText.h3}
          {tasks.length}
        </h3>

        {/* No tasks left! will display if we have no task else display task */}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onEdit={updateTask} />
        ) : (
          <span className={styles.span}>{stringText.span}</span>
        )}
      </div>
    </div>
  );
}

export default App;
