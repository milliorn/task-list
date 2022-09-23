import TaskItem from "./TaskItem";

const Items = ({ items, onDelete, onEdit }) => {
  return (
    <>
      {items.map((item) => (
        <TaskItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

export default Items;
