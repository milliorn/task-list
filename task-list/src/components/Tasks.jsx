import TaskItem from "./TaskItem";

const Tasks = ({ tasks, onDelete, onEdit }) => {
  return (
    <>
      {tasks.map((item) => (
        <TaskItem
          item={item}
          key={item.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

export default Tasks;
