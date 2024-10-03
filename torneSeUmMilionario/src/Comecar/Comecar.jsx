import './comecar.css';

export function Comecar() {

    let i = 2;
    
  const questoes = [
    {
      id: 1,
      pergunta: 'Qual o nome do personagem principal da série?',
      alternativas: ['Rick Sanchez', 'Morty Smith', 'Summer Sparks', 'Beth Phoenix'],
      resposta: 'Rick Sanchez'
    },
    {
      id: 2,
      pergunta: 'Qual a profissão do personagem de Summer Sparks?',
      alternativas: ['Médica', 'Veterinária', 'Enfermeira', 'Piloto de avião'],
      resposta: 'Enfermeira'
    },
    {
      id: 3,
      pergunta: 'Quando foi criado o Rick Sanchez?',
      alternativas: ['1945', '1955', '1965', '1975'],
      resposta: '1945'
    }
    ]

    return (
        <div>
            <div key={questoes[i].id}>
              <h2>{questoes[i].pergunta}</h2>
              <ul>
                {questoes[i].alternativas.map(alternativa => (
                  <li key={alternativa}>{alternativa}</li>
                ))}
              </ul>
            </div>
        </div>

      );
}