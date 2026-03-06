import { useState } from "react";

function Letter() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <section className="section letter fade-in">
      <img
        src="/letter.png"
        alt="Handwritten Letter"
        className={`letter-img ${showLetter ? "clear" : "blurred"}`}
      />
      {!showLetter && (
        <button onClick={() => setShowLetter(true)}>Reveal Letter</button>
      )}
    </section>
  );
}

export default Letter;