import { useState } from 'react';
import { Heart } from 'lucide-react';
import './QuestionPage.css';

interface QuestionPageProps {
  onAccept: () => void;
}

function QuestionPage({ onAccept }: QuestionPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [noButtonSize, setNoButtonSize] = useState(1);

  const handleNoHover = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    const newSize = Math.max(0.5, noButtonSize - 0.1);

    setNoButtonPosition({ top: randomTop, left: randomLeft });
    setNoButtonSize(newSize);
  };

  return (
    <div className="question-page">
      <div className="hearts-background">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="content">
        <h1 className="question">Tu veux être mon saint valentin?</h1>

        <div className="buttons-container">
          <button className="yes-button" onClick={onAccept}>
            Oui ❤️
          </button>

          <button
            className="no-button"
            onMouseEnter={handleNoHover}
            style={{
              position: noButtonPosition.top || noButtonPosition.left ? 'fixed' : 'relative',
              top: noButtonPosition.top ? `${noButtonPosition.top}%` : 'auto',
              left: noButtonPosition.left ? `${noButtonPosition.left}%` : 'auto',
              transform: `scale(${noButtonSize})`,
            }}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
