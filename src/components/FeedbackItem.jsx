import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import Context from '../context/Context'

export default function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(Context)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
