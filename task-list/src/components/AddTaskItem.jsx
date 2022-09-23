import { useState } from "react";
import Swal from "sweetalert2";

const styles = {
  form: "mb-4 add-form",
  div: "mx-0 my-4 form-control",
  label: "block text-xl sm:text-2xl md:text-3xl",
  inputText:
    "w-full h-10 px-2 py-1 m-1 text-lg focus:outline-none text-zinc-900",
  inputSubmit:
    "inline-block w-full px-5 py-3 m-1 text-base no-underline border border-none rounded-md cursor-pointer sm:text-lg md:text-xl lg:text-2xl btn btn-block bg-zinc-500 text-zinc-50 focus:text-zinc-50 focus:outline-none",
};

const stringText = {
  icon: "error",
  title: "Error!",
  text: "Add task or close the form.",
  placeholder: "Example: npm i",
  value: "Save Task",
};

const AddTaskItem = ({ onSave }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      Swal.fire({
        icon: stringText.icon,
        title: stringText.title,
        text: stringText.text,
      });
    } else {
      onSave({ text });
    }

    setText("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.div}>
        <label className={styles.label}>Task</label>
        <input
          className={styles.inputText}
          type="text"
          placeholder={styles.placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <input
        type="submit"
        className={styles.inputSubmit}
        value={stringText.value}
      />
    </form>
  );
};

export default AddTaskItem;
