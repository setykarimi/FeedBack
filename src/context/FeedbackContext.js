import { v4 as uuidv4 } from 'uuid'
import { createContext, useContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  },[])

  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:3001/feedback?sort=id&_order=desc`)
    const data = await response.json()
    console.log(data);
    setFeedback(data);
    setIsoading(false);
  }

  // delete feedback
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
    setFeedbackEdit({
      item: item,
      edit: true
    })
  }


  // Update feedBack
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}>
      {children}
    </FeedbackContext.Provider>)
}

export const useFeedback = () => useContext(FeedbackContext);
