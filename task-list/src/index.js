import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";

/* React 18+ */
createRoot(document.getElementById("root")).render(<App tab="home" />);
