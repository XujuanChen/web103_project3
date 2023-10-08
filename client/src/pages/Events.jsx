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
        const value = e.target.value;
        const locations = events.map(({location})=>location)
        // console.log(locations)
        const filtered = locations.filter((item)=>item===value)
        // console.log(filtered)
        setFilteredEvents(filtered);
    }

    return (
        <div className="Gifts">
            <div className='searchBar'>
                <label htmlFor="site-search">Search Location ☞</label>
                <select className='selectMenu' name="locations" id="location-select" onChange={e => filterByLocation(e)}>
                    <option value="0">-- Please choose a location --</option>
                    <option value="logansquare">Logansquare</option>
                    <option value="bucktown">Bucktown</option>
                    <option value="downtown">Downtown</option>
                    <option value="wickerpark4">Wickerpark</option>
                </select>
                <Link to='/events'><button onClick={()=>setFilteredEvents(events)}>All Events</button></Link>

            </div>
            <main>
            {
                filteredEvents && filteredEvents.length > 0 ?
                filteredEvents.map((event, index) => 
                <Card key={index} id = {event.id} image={event.image} name={event.name} location={event.location}/>) : 

                events && events.length > 0 ?
                events.map((event,index) => 
                <Card key={index} id={event.id} 
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