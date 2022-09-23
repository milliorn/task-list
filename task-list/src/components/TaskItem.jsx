import { FaPencilAlt, FaTimes } from "react-icons/fa";

const TaskItem = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <div className="flex justify-between max-w-full px-5 py-3 mx-auto my-2 overflow-scroll rounded-md cursor-pointer item bg-zinc-100">
        <div className="text-zinc-900">
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <span className="font-bold itemBold">Item: </span>
            <span>{item.text}</span>
          </p>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <span className="font-bold itemBold">Quantity: </span>
            {item.quantity}
          </p>
        </div>
        <div>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <FaTimes
              onClick={() => onDelete(item.id)}
              className="my-1.5 text-red-500 cursor-pointer delIcon"
            />
          </p>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <FaPencilAlt
              onClick={() => onEdit(item.id)}
              className="my-1.5 text-blue-500 cursor-pointer editIcon"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
