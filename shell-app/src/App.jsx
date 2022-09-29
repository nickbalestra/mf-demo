import React from "react";
import appLogo from "./assets/app-logo.svg";

import Bridge from "@optimism/gateway/Bridge";
import { Header } from "@optimism/design-system/Header";

import css from "./app.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const LeftContent = () => {
    return (
      <>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/bridge">
          Bridge
        </Link>
        <Link className="link" to="/docs">
          Docs
        </Link>
      </>
    );
  };

  return (
    <div>
      <Header
        logo={appLogo}
        leftContent={<LeftContent />}
        onUnconnect={() => {}}
        onConnect={() => {
          window.alert("Hi 👋");
        }}
      />
      <div className="bridgeContainer">
        <Routes>
          <Route
            path="/"
            element={
              <div className="homeContainer">
                <h1>Welcome to Acme</h1>
              </div>
            }
          />
          <Route
            path="/bridge"
            element={
              <Bridge
                onClick={() => {
                  window.alert(`Hi Again 🤪 `);
                }}
              />
            }
          />
          <Route
            path="/docs"
            element={
              <div className="docsContainer">
                <div>
                  <h2>Blah</h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </div>
                <div>
                  <h2>Blah</h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </div>
                <div>
                  <h2>Blah</h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
