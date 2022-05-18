import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This rating is from Context (1)', rating: 10 },
    { id: 2, text: 'This rating is from Context (2)', rating: 3 },
    { id: 3, text: 'This rating is from Context (3)', rating: 6 },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  const deleteFeedback = (id) => {
    window.confirm('Are you sure?') &&
      setFeedback(feedback.filter((item) => item.id !== id))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  return (
    <Context.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
