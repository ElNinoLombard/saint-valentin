import { Heart } from 'lucide-react';
import './CelebrationPage.css';

function CelebrationPage() {
  return (
    <div className="celebration-page">
      <div className="celebration-hearts">
        {[...Array(50)].map((_, i) => (
          <Heart
            key={i}
            className="exploding-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="celebration-content">
        <div className="big-heart">
          <Heart size={200} fill="#ff1744" color="#ff1744" />
        </div>

        <h1 className="celebration-title">Yayyy! 💕</h1>
        <p className="celebration-message">Je t'aime mon amour! ❤️</p>

        <div className="gif-container">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXZ5ZjBpNWRnZTBqbHl6ZWl3YzB3YnVsM3hreGt5eGN0YnE5dGV3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26u4cqiYI30juCOGY/giphy.gif"
            alt="Love celebration"
            className="celebration-gif"
          />
        </div>
      </div>
    </div>
  );
}

export default CelebrationPage;
