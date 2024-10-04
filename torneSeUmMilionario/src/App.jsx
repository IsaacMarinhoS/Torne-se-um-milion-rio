import "./App.css";
import { Home } from './Home/home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Comecar } from './Comecar/Comecar.jsx';
import { Regra } from "./Regras/regra.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/comecar" element={<Comecar />}/>
        <Route path="/regras" element={<Regra />}/>
      </Routes>
    </Router>
  );
}

export default App;
