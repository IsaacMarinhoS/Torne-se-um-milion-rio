import "./header.css";

export function Header() {
  return (
    <header className="header">
      <h1>torne-se um Milionário</h1>
      <nav>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#rules">Regras</a></li>
          <li><a href="#start">Começar Jogo</a></li>
        </ul>
      </nav>
    </header>
  );
}
