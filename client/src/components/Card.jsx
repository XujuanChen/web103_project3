import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  const [event, setEvent] = useState({id: 0, name: "", image: ""});
  useEffect(() => {
    setEvent({
      id: props.id,
      name: props.name,
      image: props.image,
    })
  })
  return (
    <div className="card">
    <div className='top-container' style={{ backgroundImage:`url(${event.image})`}}></div>
    <div className='bottom-container'>
        <h3>{event.name}</h3>
        <Link to={'/events/' + event.id}><a>Read More →</a></Link>
    </div>
</div>
  )
}

export default Card