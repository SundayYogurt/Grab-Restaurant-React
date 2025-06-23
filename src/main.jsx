import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AddRes from "./pages/AddRes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddRes />
  </StrictMode>
);
