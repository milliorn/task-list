import { useState } from "react";
import Swal from "sweetalert2";

const styles = {
  div: "mx-0 my-4 form-control",
  form: "mb-4 add-form",
  inputSubmit:
    "inline-block w-full px-5 py-3 m-1 text-base no-underline border border-none rounded-md cursor-pointer sm:text-lg md:text-xl lg:text-2xl btn btn-block bg-zinc-500 text-zinc-50 focus:text-zinc-50 focus:outline-none",
  inputText:
    "w-full h-10 px-2 py-1 m-1 text-lg focus:outline-none text-zinc-900",
  label: "block text-xl sm:text-2xl md:text-3xl",
};

const stringText = {
  icon: "error",
  placeholder: "Example: npm i",
  text: "Add task or close the form.",
  title: "Error!",
  value: "Save Task",
};

const AddTaskItem = ({ onSave }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      Swal.fire({
        icon: stringText.icon,
        text: stringText.text,
        title: stringText.title,
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
          onChange={(e) => setText(e.target.value)}
          placeholder={stringText.placeholder}
          type="text"
          value={text}
        />
      </div>

      <input
        className={styles.inputSubmit}
        type="submit"
        value={stringText.value}
      />
    </form>
  );
};

export default AddTaskItem;
