import { useEffect, useState } from "react";

import AddTaskItem from "./components/AddTaskItem";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import createTask from "./tasks/createTask";
import deleteTask from "./tasks/deleteTask";
import updateTask from "./tasks/updateTask";

const styles = {
  div: "container max-w-2xl mx-auto my-0 overflow-auto text-zinc-50 opacity-90 bg-zinc-900 p-7",
  h3: "mb-4 text-lg lg:mb-5 xl:mb-6 2xl:mb-7 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
  html: "box-border m-0 p-0",
  span: "text-xl leading-10",
};

const stringText = {
  h3: "Remaining Tasks: ",
  icon: "success",
  span: "Tasks will be added here...",
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

  return (
    <div className={styles.html}>
      <div className={styles.div}>
        <Header
          showForm={() => setShowTask(!showTask)}
          updateColorText={showTask}
        />

        {/* If true switch over to form to add task */}
        {showTask && <AddTaskItem onSave={createTask(setTasks, tasks)} />}

        {/* Remaining Task */}
        <h3 className={styles.h3}>
          {stringText.h3}
          {tasks.length}
        </h3>

        {/* No tasks left! will display if we have no task else display task */}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask(tasks, setTasks)}
            onEdit={updateTask}
          />
        ) : (
          <span className={styles.span}>{stringText.span}</span>
        )}
      </div>
    </div>
  );
}

export default App;
