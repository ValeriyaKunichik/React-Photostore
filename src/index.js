import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"
import "./styles.css";
import {ContextProvider} from "./Context"
import App from "./App"

ReactDOM.createRoot(document.querySelector("#root")).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>);