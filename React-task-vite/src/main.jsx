import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import PageContainer from "./components/PageContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageContainer>
      <App />
    </PageContainer>
  </StrictMode>,
);
