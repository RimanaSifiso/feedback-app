import { useState, useContext, useEffect } from 'react'
import Context from '../context/Context'

export default function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)

  const { feedbackEdit, feedback } = useContext(Context)

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  useEffect(() => {
    setSelected(null)
  }, [feedback])

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label style={{ cursor: 'pointer' }} htmlFor={`num${i + 1}`}>
            {i + 1}
          </label>
        </li>
      ))}
    </ul>
  )
}
