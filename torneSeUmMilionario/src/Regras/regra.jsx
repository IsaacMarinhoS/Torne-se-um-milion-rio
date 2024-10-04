import './regra.css'; 

export function Regra() {
    return (
      <header className='regra' >
        1. O Jogo
O jogo tem um total de 50 perguntas.Cada pergunta vale 20.000, e o prêmio final é de 1 Milhão.

Caso o jogador erre 3 pergunta, ele leva metade do prêmio que acumulou e o jogo acaba. Se ele errar a última pergunta, ele perde tudo.


O jogador tem direito a pular a pergunta 3 vezes, mas pular não se aplica à pergunta final.

<br /><br />2. Os Controles
Para responder a uma pergunta, clique em uma resposta. Ela ficará verde, se você acertar, ou vermelha, se você errar.

Para desativar a música, é só clicar no botão música, mesma coisa para o volume.
      </header>
    );
  }