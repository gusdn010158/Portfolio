import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Collabo from "./Collabo";
import Alone from "./Alone";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Alone" element={<Alone />} />
        <Route path="/Collabo" element={<Collabo />} />
      </Routes>
    </Router>
  );
}

export default App;
