import React from "react";
import css from "./header.css";

export default function Header({ left, right }) {
  return (
    <header className="navbar">
      {left}
      {right}
    </header>
  );
}
