import React, { useState } from "react";
import { Button } from "@optimism/design-system/Button";
import css from "./bridge.css";

export default function Bridge({ onClick, backgroundColor }) {
  const [input, setInput] = useState(0);

  function handleClick() {
    onClick((prevBalance) => prevBalance + input);
  }
  function handleInputChange(e) {
    setInput(Number(e.target.value));
  }

  return (
    <div className="bridgeContainer">
      <input value={input} onChange={handleInputChange} />
      <Button
        primary
        label="Deposit"
        onClick={() => handleClick()}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}
