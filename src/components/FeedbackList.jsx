import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import Context from '../context/Context'

export default function FeedbackList() {
  const { feedback } = useContext(Context)

  return !feedback || !feedback.length ? (
    <p>No feedback yet!</p>
  ) : (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  )
}
