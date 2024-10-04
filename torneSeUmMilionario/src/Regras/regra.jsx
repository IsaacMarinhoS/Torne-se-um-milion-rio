import './regra.css'; 

export function Regra() {
    return (
      <header className='regra' >
        1. O Jogo
O jogo tem um total de 16 perguntas, dividas em 4 fases. A cada fase, o valor e a dificuldade das perguntas aumenta, e o prêmio final é de 1 Milhão.

Caso o jogador erre uma pergunta, ele leva metade do prêmio que acumulou e o jogo acaba. Se ele errar a última pergunta, ele perde tudo.

Se o jogador desistir, ele leva todo o valor que acumulou.

O jogador tem direito a pular a pergunta 3 vezes, mas pular não se aplica à pergunta final.

<br /><br />2. Os Controles
Para responder a uma pergunta, clique em uma resposta. Ela ficará verde, se você acertar, ou vermelha, se você errar.

Para desativar a música, é só clicar no botão música, mesma coisa para o volume.
      </header>
    );
  }