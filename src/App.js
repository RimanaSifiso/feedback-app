import AppHeader from './components/AppHeader'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'

import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'

import About from './components/pages/About'
import React from 'react'
import AboutIcon from './components/AboutIcon'
import { ContextProvider } from './context/Context'

export default function App() {
 

  // const deleteFeedback = (id) => {
  //   window.confirm('Are you sure?') &&
  //     setFeedback(feedback.filter((item) => item.id !== id))
  // }

  // const addFeedBack = (newFeedback) => {
  //   newFeedback.id = uuidv4()
  //   console.log(newFeedback)
  //   setFeedback([newFeedback, ...feedback])
  // }

  return (
    <ContextProvider>
      <AppHeader />
      <div className="container">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <React.Fragment>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIcon />
                </React.Fragment>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </ContextProvider>
  )
}
