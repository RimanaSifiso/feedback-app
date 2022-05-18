
import Context from "../context/Context"
import {useContext} from 'react'

export default function FeedbackStats({  }) {
  const {feedback} = useContext(Context)

  let average = 0
  let numOfRatings = 0
  for (let item of feedback) {
    numOfRatings += item.rating
  }

  average = (numOfRatings / feedback.length).toFixed(1)


  return (
    <div className='feedback-stats'>
      <h4>{ feedback.length } Reviews</h4>
      <h4>Average rating: { isNaN(average) ? 0 : average }</h4>
    </div>
  );
}
