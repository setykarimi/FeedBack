import { useState } from 'react';
import './App.css';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <div className="App">
      <Header />
      <FeedbackList feedback={feedback}/>
    </div>
  );
}

export default App;
