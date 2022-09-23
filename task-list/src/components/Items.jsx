import GroceryItem from "./GroceryItem";

const Items = ({ items, onDelete, onEdit }) => {
  return (
    <>
      {items.map((item) => (
        <GroceryItem
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
