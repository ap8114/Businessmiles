import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom"; // ✅ ADD THIS
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";
import ScrollToTop from "./Components/Layout/Scrolltotop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
  
      
    </BrowserRouter>
  </StrictMode>
);
