import React from "react";
import Button from "./Button";

const styles = {
  h2: "font-serif text-xl app-header sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  header: "flex items-center justify-between mb-4 header",
};

const text = {
  h2: "Task List",
};

const Header = ({ showForm, updateColorText }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.h2}>{text.h2}</h2>
      <Button
        color={updateColorText ? "red" : "green"} // change color based on state
        onClick={showForm}
        text={updateColorText ? "Close" : "Add"} // change color based on state
      />
    </header>
  );
};

export default Header;
