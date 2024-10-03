import "./home.css";

export function Header() {
  return (
    <header className="header">
      <h1>torne-se um Milionário</h1>
      <nav>
        <ul>
          <button><a href="#inicio">Início</a></button>
          <button><a href="#regras">Regras</a></button>
          <button><a href="#começar">Começar Jogo</a></button>
        </ul>
      </nav>
    </header>
  );
}
