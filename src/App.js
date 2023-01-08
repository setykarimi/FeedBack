import { useState } from 'react';
import './App.css';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
      <Header />
      <div className="App text-white w-fit h-screen mx-auto p-5 md:w-1/2 xl:w-1/3">
        <BrowserRouter>
          <Routes>

            <Route path='/' end element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            } />

            <Route path='/about-us' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </BrowserRouter>
      </div>
    </FeedbackProvider>
  );
}

export default App;
