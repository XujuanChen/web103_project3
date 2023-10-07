import React, { useState, useEffect } from 'react'
import './Events.css'
import Card from '../components/Card'
import { Link } from 'react-router-dom';

const Events = (props) => {

    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    useEffect(() => {
        setEvents(props.data)
    }, [props])

    const filterByLocation = (e) => {
        // console.log(e.target.value)
        if (e.target.value === '0') {
            setFilteredEvents(events)
        }

        if (e.target.value === '1') {
            setFilteredEvents(events.filter(evt => evt.location === "The Echo Louge & Music Hall"))
        } 
        if (e.target.value === '2') {
            setFilteredEvents(events.filter(evt => evt.location === "House of Blues"))
        } 
        if (e.target.value === '3') {
            setFilteredEvents(events.filter(evt => evt.location === "The Pavillion at Toyota Music Factory"))
        } 
        if (e.target.value === '4') {
            setFilteredEvents(events.filter(evt => evt.location === "American Airline Center"))
        }
    }

    return (
        <div className="Gifts">
            <div className='searchBar'>
                <label for="site-search">Search Location ☞</label>
                <select name="locations" id="location-select" onChange={e => filterByLocation(e)}>
                    <option value="0">-- Please choose a location --</option>
                    <option value="1">The Echo Louge & Music Hall</option>
                    <option value="2">House of Blues</option>
                    <option value="3">The Pavillion at Toyota Music Factory</option>
                    <option value="4">American Airline Center</option>
                </select>
                <Link to='/events'><button onClick={()=>setFilteredEvents(events)}>All Events</button></Link>

            </div>
            <main>
            {
                filteredEvents && filteredEvents.length > 0 ?
                filteredEvents.map((event, index) => 
                <Card id = {event.id} image={event.image} name={event.name} location={event.location}/>) : 

                events && events.length > 0 ?
                events.map((event,index) => 
                <Card id={event.id} 
                    image={event.image} 
                    name={event.name} 
                    location={event.location}/>

                ) : <h3 className="noResults">{'No Events Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Events