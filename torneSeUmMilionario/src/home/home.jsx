import "./home.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Home() {
  const [volume, setVolume] = useState(1); // Estado para controlar o volume (de 0 a 1)

  useEffect(() => {
    const audio = document.getElementById("background-music");
    audio.volume = volume; // Define o volume inicial
    audio.play();

    return () => {
      audio.pause(); // Para a música quando o componente é desmontado
    };
  }, []); // Mantém a mesma lógica de reprodução e pausa no efeito

 
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value; // Obtém o novo valor do volume
    setVolume(newVolume); // Atualiza o estado do volume
    const audio = document.getElementById("background-music");
    audio.volume = newVolume; // Define o novo volume no elemento de áudio
  };

  return (
    <header className="header">
      <h1>TORNE-SE UM MILIONÁRIO</h1>
      
      <nav>
        <ul>
          <button className="show"><Link to="/regras">Regras</Link></button>
          <button className="show"><Link to="/comecar">Começar Jogo</Link></button>
        </ul>
      </nav>

     
      <label htmlFor="volume-control"></label>
      <input className="volume-control"
        id="volume-control"
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
      />

      {/* Adicionando a tag de áudio */}
      <audio id="background-music" loop>
        <source src="./assets/silvio.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </header>
  );
}
