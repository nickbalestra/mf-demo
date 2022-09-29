import React from "react";
import css from "./button.css";

export default function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
