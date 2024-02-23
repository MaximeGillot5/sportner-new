import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import authService from "./auth/authService";

authService.setAuthHeaders();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
