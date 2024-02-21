import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Events } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
