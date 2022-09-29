import React, { useState } from "react";
import { Header } from "@optimism/design-system/Header";
import Bridge from "./Bridge";
import css from "./app.css";

export default function App() {
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState(null);
  return (
    <div>
      <Header
        user={user}
        rightContent={<span>Balance: {balance}</span>}
        onConnect={() =>
          setUser({
            address: "0x123",
          })
        }
        onUnconnect={() => setUser(null)}
      />
      <div className="container">
        <Bridge onClick={setBalance} />
      </div>
    </div>
  );
}
