import App from "./src/App";

import ReactDOMClient from "react-dom/client";
import React from "react";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
