import React from "react";
import Button from "./Button";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <header className="flex items-center justify-between mb-4 header">
      <h2 className="font-serif text-xl app-header sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Task List
      </h2>
      <Button
        color={changeTextAndColor ? "red" : "green"}
        onClick={showForm}
        text={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
  );
};

export default Header;
