import { useState } from 'react';
import './Comecar.css';

export function Comecar() {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [montante, setMontante] = useState(20000);
    const [tentativas, setTentativas] = useState(2);

  const questoes = [
    {
        "id": 1,
        "pergunta": "Qual o nome da protagonista da série 'Stranger Things'?",
        "alternativas": ["Eleven", "Max", "Nancy", "Joyce"],
        "resposta": "Eleven"
    },
    {
        "id": 2,
        "pergunta": "Qual o nome do artista que lançou o álbum 'Midnights' em 2022?",
        "alternativas": ["Adele", "Taylor Swift", "Ed Sheeran", "Beyoncé"],
        "resposta": "Taylor Swift"
    },
    {
        "id": 3,
        "pergunta": "Qual série da Netflix é conhecida por sua temática de sobrevivência e jogos mortais?",
        "alternativas": ["La Casa de Papel", "Round 6", "The Witcher", "Stranger Things"],
        "resposta": "Round 6"
    },
    {
        "id": 4,
        "pergunta": "Qual filme da Marvel foi lançado em 2021 e apresenta o personagem Shang-Chi?",
        "alternativas": ["Black Widow", "Eternals", "Shang-Chi and the Legend of the Ten Rings", "Spider-Man: No Way Home"],
        "resposta": "Shang-Chi and the Legend of the Ten Rings"
    },
    {
        "id": 5,
        "pergunta": "Quem é o criador da série 'The Mandalorian'?",
        "alternativas": ["Jon Favreau", "Dave Filoni", "George Lucas", "Kathleen Kennedy"],
        "resposta": "Jon Favreau"
    },
    {
        "id": 6,
        "pergunta": "Qual é o nome da banda que lançou o hit 'Butter' em 2021?",
        "alternativas": ["BTS", "Blackpink", "Twice", "EXO"],
        "resposta": "BTS"
    },
    {
        "id": 7,
        "pergunta": "Qual a série que popularizou o termo 'Winter is Coming'?",
        "alternativas": ["The Witcher", "Game of Thrones", "Vikings", "The Last Kingdom"],
        "resposta": "Game of Thrones"
    },
    {
        "id": 8,
        "pergunta": "Quem venceu o Oscar de Melhor Filme em 2022?",
        "alternativas": ["CODA", "Duna", "Belfast", "Drive My Car"],
        "resposta": "CODA"
    },
    {
        "id": 9,
        "pergunta": "Qual é o nome do filme mais recente da saga 'Star Wars'?",
        "alternativas": ["The Last Jedi", "The Rise of Skywalker", "Rogue One", "Solo"],
        "resposta": "The Rise of Skywalker"
    },
    {
        "id": 10,
        "pergunta": "Qual artista ganhou o Grammy de Álbum do Ano em 2022?",
        "alternativas": ["Jon Batiste", "Taylor Swift", "Billie Eilish", "Olivia Rodrigo"],
        "resposta": "Jon Batiste"
    },
    {
        "id": 11,
        "pergunta": "Qual série de animação é conhecida por sua crítica social e humor ácido, criada por Matt Groening?",
        "alternativas": ["Futurama", "Os Simpsons", "Rick and Morty", "Bojack Horseman"],
        "resposta": "Os Simpsons"
    },
    {
        "id": 12,
        "pergunta": "Qual foi o fenômeno viral que trouxe de volta a música 'Running Up That Hill' de Kate Bush em 2022?",
        "alternativas": ["TikTok", "Stranger Things", "YouTube", "Instagram"],
        "resposta": "Stranger Things"
    },
    {
        "id": 13,
        "pergunta": "Qual a plataforma que lançou a série 'Squid Game'?",
        "alternativas": ["Amazon Prime", "Disney+", "Netflix", "HBO"],
        "resposta": "Netflix"
    },
    {
        "id": 14,
        "pergunta": "Qual é o nome do filme que apresenta a história do cantor Elvis Presley?",
        "alternativas": ["Rocketman", "Bohemian Rhapsody", "Elvis", "A Star is Born"],
        "resposta": "Elvis"
    },
    {
        "id": 15,
        "pergunta": "Quem é a cantora conhecida por seu hit 'Drivers License'?",
        "alternativas": ["Olivia Rodrigo", "Dua Lipa", "Billie Eilish", "Taylor Swift"],
        "resposta": "Olivia Rodrigo"
    },
    {
        "id": 16,
        "pergunta": "Qual série de sucesso da HBO é baseada nos livros de George R.R. Martin?",
        "alternativas": ["Westworld", "Game of Thrones", "Succession", "True Detective"],
        "resposta": "Game of Thrones"
    },
    {
        "id": 17,
        "pergunta": "Qual artista é conhecido por seu estilo de música 'K-pop'?",
        "alternativas": ["Ed Sheeran", "BTS", "Adele", "Shawn Mendes"],
        "resposta": "BTS"
    },
    {
        "id": 18,
        "pergunta": "Qual a série de Netflix que segue a vida de uma adolescente chamada Anne?",
        "alternativas": ["Anne with an E", "The Queen's Gambit", "Outer Banks", "Bridgerton"],
        "resposta": "Anne with an E"
    },
    {
        "id": 19,
        "pergunta": "Qual filme da Disney apresentou a história de um jovem príncipe chamado Aladdin?",
        "alternativas": ["A Bela e a Fera", "O Rei Leão", "Aladdin", "Mulan"],
        "resposta": "Aladdin"
    },
    {
        "id": 20,
        "pergunta": "Qual série é conhecida por ter como tema a vida de uma família disfuncional chamada Bluth?",
        "alternativas": ["The Office", "Arrested Development", "Parks and Recreation", "Brooklyn Nine-Nine"],
        "resposta": "Arrested Development"
    },
    {
        "id": 21,
        "pergunta": "Qual é o nome do filme de super-herói que apresenta o personagem 'Wanda Maximoff'?",
        "alternativas": ["Doctor Strange", "Avengers: Endgame", "WandaVision", "Black Widow"],
        "resposta": "WandaVision"
    },
    {
        "id": 22,
        "pergunta": "Qual a série que apresenta um grupo de amigos que jogam Dungeons & Dragons?",
        "alternativas": ["The Big Bang Theory", "Stranger Things", "Brooklyn Nine-Nine", "Community"],
        "resposta": "Stranger Things"
    },
    {
        "id": 23,
        "pergunta": "Quem ganhou o Oscar de Melhor Atriz em 2021?",
        "alternativas": ["Frances McDormand", "Viola Davis", "Carey Mulligan", "Andra Day"],
        "resposta": "Frances McDormand"
    },
    {
        "id": 24,
        "pergunta": "Qual a série que acompanha uma família real fictícia na Inglaterra?",
        "alternativas": ["The Crown", "Bridgerton", "Downton Abbey", "The Royals"],
        "resposta": "The Crown"
    },
    {
        "id": 25,
        "pergunta": "Qual é o nome do ator que interpreta o personagem 'Peter Parker' no filme 'Spider-Man'?",
        "alternativas": ["Andrew Garfield", "Tobey Maguire", "Tom Holland", "Jake Gyllenhaal"],
        "resposta": "Tom Holland"
    },
    {
        "id": 26,
        "pergunta": "Qual o nome da artista que lançou a música 'Levitating'?",
        "alternativas": ["Dua Lipa", "Lady Gaga", "Ariana Grande", "Rihanna"],
        "resposta": "Dua Lipa"
    },
    {
        "id": 27,
        "pergunta": "Qual série da HBO foi baseada em uma série de livros de fantasia escrita por Robert Jordan?",
        "alternativas": ["The Witcher", "The Wheel of Time", "Shadow and Bone", "His Dark Materials"],
        "resposta": "The Wheel of Time"
    },
    {
        "id": 28,
        "pergunta": "Qual é o nome do artista que ficou famoso por sua performance em 'Old Town Road'?",
        "alternativas": ["Lil Nas X", "Post Malone", "Drake", "Travis Scott"],
        "resposta": "Lil Nas X"
    },
    {
        "id": 29,
        "pergunta": "Qual filme de terror de 2022 foi um sucesso na bilheteira, dirigido por Jordan Peele?",
        "alternativas": ["Us", "Get Out", "Nope", "Candyman"],
        "resposta": "Nope"
    },
    {
        "id": 30,
        "pergunta": "Qual é a série que segue a vida de um advogado chamado Jimmy McGill?",
        "alternativas": ["Better Call Saul", "Breaking Bad", "Ozark", "Narcos"],
        "resposta": "Better Call Saul"
    },
    {
        "id": 31,
        "pergunta": "Quem interpretou o papel de 'Harley Quinn' no filme 'Esquadrão Suicida'?",
        "alternativas": ["Margot Robbie", "Emma Stone", "Scarlett Johansson", "Natalie Portman"],
        "resposta": "Margot Robbie"
    },
    {
        "id": 32,
        "pergunta": "Qual é o nome da série que apresenta um grupo de jovens que viajam no tempo para resolver mistérios?",
        "alternativas": ["Dark", "The Umbrella Academy", "Stranger Things", "Time After Time"],
        "resposta": "The Umbrella Academy"
    },
    {
        "id": 33,
        "pergunta": "Qual filme ganhou o Oscar de Melhor Animação em 2022?",
        "alternativas": ["Encanto", "Luca", "Raya and the Last Dragon", "The Mitchells vs. The Machines"],
        "resposta": "Encanto"
    },
    {
        "id": 34,
        "pergunta": "Qual série da Disney+ segue as aventuras de um grupo de jovens Jedi?",
        "alternativas": ["The Mandalorian", "Star Wars: The Clone Wars", "Obi-Wan Kenobi", "Star Wars: Rebels"],
        "resposta": "Star Wars: The Clone Wars"
    },
    {
        "id": 35,
        "pergunta": "Quem é o autor da série de livros 'Harry Potter'?",
        "alternativas": ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "C.S. Lewis"],
        "resposta": "J.K. Rowling"
    },
    {
        "id": 36,
        "pergunta": "Qual é o nome do grupo que lançou a música 'Good 4 U' em 2021?",
        "alternativas": ["Paramore", "Olivia Rodrigo", "Halsey", "Dua Lipa"],
        "resposta": "Olivia Rodrigo"
    },
    {
        "id": 37,
        "pergunta": "Qual é o nome da série que retrata a vida da rainha Elizabeth II?",
        "alternativas": ["The Crown", "Victoria", "The Queen's Gambit", "Downton Abbey"],
        "resposta": "The Crown"
    },
    {
        "id": 38,
        "pergunta": "Qual a série de Netflix que segue um grupo de adolescentes durante o verão em uma ilha?",
        "alternativas": ["Outer Banks", "The Summer I Turned Pretty", "Never Have I Ever", "All American"],
        "resposta": "Outer Banks"
    },
    {
        "id": 39,
        "pergunta": "Qual artista lançou a música 'Peaches' em 2021?",
        "alternativas": ["Justin Bieber", "Drake", "The Weeknd", "Khalid"],
        "resposta": "Justin Bieber"
    },
    {
        "id": 40,
        "pergunta": "Quem é o protagonista da série 'The Witcher'?",
        "alternativas": ["Henry Cavill", "Jason Momoa", "Ben Affleck", "Chris Hemsworth"],
        "resposta": "Henry Cavill"
    },
    {
        "id": 41,
        "pergunta": "Qual filme é conhecido por sua famosa frase 'I am Iron Man'?",
        "alternativas": ["Avengers: Endgame", "Iron Man", "The Avengers", "Spider-Man: Homecoming"],
        "resposta": "Iron Man"
    },
    {
        "id": 42,
        "pergunta": "Qual série de animação foi criada por Seth MacFarlane?",
        "alternativas": ["Futurama", "Rick and Morty", "Family Guy", "The Simpsons"],
        "resposta": "Family Guy"
    },
    {
        "id": 43,
        "pergunta": "Qual é o nome da artista que lançou a música 'Watermelon Sugar'?",
        "alternativas": ["Harry Styles", "Ed Sheeran", "Shawn Mendes", "Justin Bieber"],
        "resposta": "Harry Styles"
    },
    {
        "id": 44,
        "pergunta": "Qual é a série que se passa em um mundo pós-apocalíptico e segue um grupo de sobreviventes?",
        "alternativas": ["The Walking Dead", "The 100", "Fear the Walking Dead", "The Road"],
        "resposta": "The Walking Dead"
    },
    {
        "id": 45,
        "pergunta": "Quem ganhou o Oscar de Melhor Diretor em 2021?",
        "alternativas": ["Chloé Zhao", "Bong Joon-ho", "Martin Scorsese", "Greta Gerwig"],
        "resposta": "Chloé Zhao"
    },
    {
        "id": 46,
        "pergunta": "Qual é o nome do rapper que lançou o álbum 'Certified Lover Boy'?",
        "alternativas": ["Kendrick Lamar", "J. Cole", "Drake", "Lil Wayne"],
        "resposta": "Drake"
    },
    {
        "id": 47,
        "pergunta": "Qual é o nome do filme que apresenta uma história de amor entre dois adolescentes em meio a uma pandemia?",
        "alternativas": ["Everything, Everything", "The Fault in Our Stars", "Love, Simon", "Five Feet Apart"],
        "resposta": "Five Feet Apart"
    },
    {
        "id": 48,
        "pergunta": "Qual é a série que segue a vida de uma jovem com habilidades mágicas?",
        "alternativas": ["Chilling Adventures of Sabrina", "The Magicians", "The Worst Witch", "Shadow and Bone"],
        "resposta": "Chilling Adventures of Sabrina"
    },
    {
        "id": 49,
        "pergunta": "Quem é o autor do livro 'O Sol é Para Todos'?",
        "alternativas": ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        "resposta": "Harper Lee"
    },
    {
        "id": 50,
        "pergunta": "Qual artista lançou a música 'Stay' em colaboração com Justin Bieber?",
        "alternativas": ["The Kid LAROI", "Shawn Mendes", "Post Malone", "Lil Nas X"],
        "resposta": "The Kid LAROI"
    }
]

const handleRespostaSelecionada = (alternativa) => {
  if (respostaSelecionada === null) { // Garante que não seja possível selecionar outra resposta
      setRespostaSelecionada(alternativa);
      if (alternativa === questoes[indiceAtual].resposta) {
          const novoMontante = montante + 20000;
          const montanteFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(novoMontante);
          setFeedback(`Correto! Você está perto de se tornar um milionário! Você ganhou R$ 20.000,00, Seu montante total é de ${montanteFormatado}`);
          setMontante(novoMontante);
      } else {
          setFeedback(`Incorreto! Preste mais atenção na próxima. Restam ${tentativas} tentativas.`);
          setTentativas(tentativas - 1);
      }
  }
};

const handleNext = () => {
  setRespostaSelecionada(null);
  setFeedback('');
  if (indiceAtual < questoes.length - 1) {
      setIndiceAtual(indiceAtual + 1);
  }
};

return (
  <div>
      {tentativas >= 0 ? (
          <div>
              <div key={questoes[indiceAtual].id}>
                  <h2>{questoes[indiceAtual].pergunta}</h2>
                  <ul>
                      {questoes[indiceAtual].alternativas.map(alternativa => (
                          <li 
                              key={alternativa} 
                              onClick={() => handleRespostaSelecionada(alternativa)} 
                              style={{ 
                                  cursor: 'pointer', 
                                  fontWeight: respostaSelecionada === alternativa ? 'bold' : 'normal',
                                  color: respostaSelecionada ? (alternativa === questoes[indiceAtual].resposta ? 'green' : 'red') : 'black' // Cor para feedback visual
                              }}
                          >
                              {alternativa}
                          </li>
                      ))}
                  </ul>
                  {respostaSelecionada && <p>{feedback}</p>}
              </div>
              <div>
                  <button onClick={handleNext} disabled={indiceAtual === questoes.length - 1 || respostaSelecionada === null}>Próximo</button>
              </div>
          </div>
      ) : (
          <p>Você não tem mais tentativas!</p>
      )}
  </div>
);
}