import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './EventDetails.css'

const EventDetails = ({data}) => {
    const { id } = useParams()
    const [event, setEvent] = useState({id: 0, name: "", image: "", description: "", submittedon: ""})


    useEffect(() => {
        const fetchEventById = async () => {
            const response = await fetch(`http://localhost:3001/events/${id}`)
            const json = await response.json()
            setEvent(json)
        }
        fetchEventById()
    }, [data, id]);


    return (
        <div className="GiftDetails">
            <main id="gift-content" class="gift-info">
                <div class="image-container">
                    <img id="image" src={event.image} />
                </div>
                <div className="gift-details">
                    <h2 id="name">{event.name}</h2>
                    <p id="description">{event.description}</p>
                    <p id="submittedBy">{'Submitted On: ' + event.submittedon } </p>
                </div>
            </main>
        </div>
    )
}

export default EventDetails