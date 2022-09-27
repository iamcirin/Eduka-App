import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { StudentProvider } from "./context/StudentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StudentProvider>
        <div className="hold-transition sidebar-mini layout-fixed">
          <App />
        </div>
      </StudentProvider>
    </AuthProvider>
  </React.StrictMode>
);
