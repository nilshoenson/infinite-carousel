import * as React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles/main.css"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
