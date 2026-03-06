import React, { useEffect } from "react";
import Birthday from "./components/Birthday";
import Cake from "./components/Cake";
import Letter from "./components/Letter";
import Photos from "./components/Photos";
import "./App.css";

function App() {
  useEffect(() => {
    // 🔹 Intersection Observer for fade-in sections
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));

    // cleanup observer
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    // 🔹 Falling emoji confetti
    const container = document.getElementById("confetti-container");
    const emojis = ["💗", "💕", "❤️"];

    function createConfetti() {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      // random horizontal position
      confetti.style.left = Math.random() * window.innerWidth + "px";

      // random animation duration
      const duration = 3 + Math.random() * 3;
      confetti.style.animationDuration = duration + "s";

      // random size
      confetti.style.fontSize = 1.5 + Math.random() * 1.5 + "rem";

      container.appendChild(confetti);

      // remove after animation
      setTimeout(() => {
        confetti.remove();
      }, duration * 1000);
    }

    const interval = setInterval(createConfetti, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Confetti container */}
      <div id="confetti-container"></div>

      {/* Sections */}
      <Birthday />
      <Cake />
      <Letter />
      <Photos />
    </div>
  );
}

export default App;