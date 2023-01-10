import { v4 as uuidv4 } from 'uuid'
import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'Lorem Ipsum dolor sit amet elit, vel vitae commodi alias volupteam est volupteam ipsa quee.'
        },
        {
            id: 2,
            rating: 5,
            text: 'Ipsum dolor sit amet elit, vel vitae commodi alias volupteam est volupteam ipsa quee.'
        },
        {
            id: 3,
            rating: 8,
            text: 'vel vitae commodi alias volupteam est volupteam ipsa quee.'
        },
        {
            id: 4,
            rating: 6,
            text: 'sit amet elit, vel vitae commodi alias volupteam est volupteam ipsa quee.'
        },
    ])

    
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([...feedback, newFeedback])
  }

  // Set item to be update
  const editFeedback = (item) => {
    setFeedback({
      item,
      edit: true
    })
  }

    return (
    <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback}}>
        {children}
    </FeedbackContext.Provider>)
}

export const useFeedback = () => useContext(FeedbackContext);
