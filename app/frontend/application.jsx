import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./index.scss"

// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
