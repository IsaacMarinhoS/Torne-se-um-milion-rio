import "./header.css";

export function Header() {
  return (
    <header className="header">
      <h1>torne-se um Milionário</h1>
      <nav>
        <ul>
          <button><a href="#home">Início</a></button>
          <button><a href="#rules">Regras</a></button>
          <button><a href="#start">Começar Jogo</a></button>
        </ul>
      </nav>
    </header>
  );
}
