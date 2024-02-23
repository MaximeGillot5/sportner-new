import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Events, Login } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
