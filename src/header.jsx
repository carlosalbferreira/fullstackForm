import { useEffect, useState } from "react";
import "./header.css";


export default function Header() {
const [dark, setDark] = useState(false);


// Carregar tema salvo no localStorage
useEffect(() => {
  const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);


// Alternar tema
const toggleTheme = () => {
const next = !dark;
setDark(next);
document.body.classList.toggle("dark", next);
localStorage.setItem("theme", next ? "dark" : "light");
};


return (
  <header className="header">
    <nav className="nav">
      <a href="#inicio">Inicio</a>
      <a href="#sobre">Sobre</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#servicos">Serviços</a>
      <a href="#contatos">Contatos</a>
    </nav>
    <button
    onClick={toggleTheme}
    className="theme-btn"
    aria-label="Alternar tema"
    >
    {dark ? "☀️" : "🌙"}
    </button>
  </header>
  );
}