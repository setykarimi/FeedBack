import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import './App.css';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([...feedback, newFeedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="App text-white w-fit mx-auto p-5 md:w-1/2 xl:w-1/3">
        <BrowserRouter>
          <Routes>
            <Route path='/' end element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            } />

            <Route path='/about-us' element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
