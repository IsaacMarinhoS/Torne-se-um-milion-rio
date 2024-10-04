import "./home.css";
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <header className="header">
      <h1>TORNE-SE UM MILIONÁRIO</h1>
      
      <nav>
        <ul>
          <button><Link to="/regras">Regras</Link></button>
          <button><Link to="/comecar">Começar Jogo</Link></button>
        </ul>
      </nav>
    </header>
  );
}


