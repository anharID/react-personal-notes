import React from "react";
import NoteApp from "./NoteApp";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
