import { FaPencilAlt, FaTimes } from "react-icons/fa";

const styles = {
  delete: "my-1.5 text-red-500 cursor-pointer delIcon",
  divLeft: "text-zinc-900",
  divMain:
    "flex justify-between max-w-full px-5 py-3 mx-auto my-2 overflow-scroll rounded-md cursor-pointer item bg-zinc-100",
  divParagraph: "sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
  divSpan: "font-bold itemBold",
  edit: "my-1.5 text-blue-500 cursor-pointer editIcon",
};

const text = {
  task: "Tasks: ",
  time: "Time: ",
};

const TaskItem = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <div className={styles.divMain}>
        <div className={styles.divLeft}>
          <p className={styles.divParagraph}>
            <span className={styles.divSpan}>{text.task}</span>
            <span>{item.text}</span>
          </p>
          <p className={styles.divParagraph}>
            <span className={styles.divSpan}>{text.time}</span>
            {item.quantity}
          </p>
        </div>
        <div>
          <p className={styles.divParagraph}>
            <FaTimes
              onClick={() => onDelete(item.id)}
              className={styles.delete}
            />
          </p>
          <p className={styles.divParagraph}>
            <FaPencilAlt
              onClick={() => onEdit(item.id)}
              className={styles.edit}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
