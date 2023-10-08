import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './EventDetails.css'

const EventDetails = ({data}) => {
    const { id } = useParams()
    // name, website, about, phone, location, image, date, time
    const [event, setEvent] = useState({id: 0, name: "", website:"", about:"", phone:"", location:"", image: "", date: "", tune: ""})


    useEffect(() => {
        const fetchEventById = async () => {
            const response = await fetch(`http://localhost:3001/events/${id}`)
            const json = await response.json()
            setEvent(json)
            console.log(json)
        }
        fetchEventById()
    }, [data, id]);


    return (
        <div className="GiftDetails">
            <main id="gift-content" className="gift-info">
                <div className="image-container">
                    <img id="image" src={event.image} />
                </div>
                <div className="gift-details">
                    <h2 id="name">{event.name}</h2>
                    <p>{'Website: ' + event.website}</p>
                    <p>{'About: ' + event.about}</p>
                    <p>{'Tel: ' + event.phone}</p>
                    <p id='location'>{'Location: ' + event.location}</p>
                    <p>{'Date: ' + event.date}</p>
                    <p>{'Time: ' + event.time}</p>
                </div>
            </main>
        </div>
    )
}

export default EventDetails