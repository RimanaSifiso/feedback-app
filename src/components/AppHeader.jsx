import React from 'react'
import PropTypes from 'prop-types'

export default function AppHeader({ text, bgColor, textColor }) {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={styles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

AppHeader.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: 'pink'
}

AppHeader.propTypes = {
  text: PropTypes.string,
}
