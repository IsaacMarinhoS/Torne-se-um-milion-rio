import "./App.css";
import { Header } from "./home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questoes from "./começar/questoes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/questoes" element={<Questoes />}/>
      </Routes>
    </Router>
  );
}

export default App;
