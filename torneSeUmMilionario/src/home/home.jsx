import "./home.css";
import Link from "react-router-dom"

export function Header() {
  return (
    <header className="header">
      <h1>torne-se um Milionário</h1>
      <nav>
        <ul>
          <button><a href="#inicio">Início</a></button>
          <button><a href="#regras">Regras</a></button>
          <button><Link href="/questoes">Começar Jogo</Link></button>
        </ul>
      </nav>
    </header>
  );
}
