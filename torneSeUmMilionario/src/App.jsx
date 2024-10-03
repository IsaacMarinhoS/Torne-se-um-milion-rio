import "./App.css";
import { Home } from './Home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Comecar } from './Comecar/Comecar.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/comecar" element={<Comecar />}/>
      </Routes>
    </Router>
  );
}

export default App;
