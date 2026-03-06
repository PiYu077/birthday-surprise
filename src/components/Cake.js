import { useState } from "react";

function Cake() {
  const [candleBlown, setCandleBlown] = useState(false);

  return (
    <section className="section cake fade-in">
      <h2>✨ Make a wish ✨</h2>
      <div className="cake-container">
        <img src="/cake.png" alt="Birthday Cake" className="cake-img" />
        {!candleBlown && (
          <img
            src="/flames.png"
            alt="Candle Flames"
            className={`flame-overlay ${candleBlown ? "fade-out" : ""}`}
          />
        )}
      </div>
      {!candleBlown ? (
        <button onClick={() => setCandleBlown(true)}>Blow Candles</button>
      ) : (
        <p>Candles blown! Your wish is on the way 💖</p>
      )}
    </section>
  );
}

export default Cake;