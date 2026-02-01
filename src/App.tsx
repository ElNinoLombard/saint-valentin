import { useState } from 'react';
import QuestionPage from './components/QuestionPage';
import CelebrationPage from './components/CelebrationPage';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="app">
      {!accepted ? (
        <QuestionPage onAccept={() => setAccepted(true)} />
      ) : (
        <CelebrationPage />
      )}
    </div>
  );
}

export default App;
