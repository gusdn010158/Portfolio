import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Collabo from "./Collabo";
import Alone from "./Alone";
import Star from "./Star";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Alone" element={<Alone />} />
        <Route path="/Collabo" element={<Collabo />} />
        <Route path="/star" element={<Star />} />
      </Routes>
    </Router>
  );
}

export default App;
