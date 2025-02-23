import React, { useState, useEffect } from "react";
import triviaData from "../utils/trivia.json"; // Import the trivia data
import "../App.css"; // Import styles

function TriviaPop({ onClose }) {
  const [trivia, setTrivia] = useState(null);

  // Fetch a random trivia fact
  useEffect(() => {
    const randomTrivia = triviaData[Math.floor(Math.random() * triviaData.length)];
    setTrivia(randomTrivia);
  }, []);

  if (!trivia) return null; // Don't render if no trivia is available

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Did You Know?</h2>
        <p>{trivia.fact}</p>
        <p><strong>Category:</strong> {trivia.category}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TriviaPop;