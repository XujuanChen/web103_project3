import React, { useState, useEffect } from 'react'
import './Events.css'
import Card from '../components/Card'


const Events = (props) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        setEvents(props.data)
    }, [props])
    
    return (
        <div className="Gifts">
            <main>
            {
                events && events.length > 0 ?
                events.map((event,index) => 
                
                <Card id={event.id} 
                    image={event.image} 
                    name={event.name} />

                ) : <h3 className="noResults">{'No Events Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Events