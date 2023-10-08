import React, { useState, useEffect } from 'react'
import './Locations.css'
import { Link } from 'react-router-dom';
import Welcome from './Welcome';

const Locations= () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
      const fetchLocations = async() => {
        const res = await fetch('http://localhost:3001/locations')
        const json = await res.json();
        if (json) {
            const locs = json.map(({location})=>location)
            const filtered = json.filter(({location}, index)=> !locs.includes(location, index+1))
            setLocations(filtered);
        }
      }
      fetchLocations();
    }, []);

    return (
        <div className='Gifts'>
            <main>
            {
                locations && locations.length>0 ? 
                locations.map((loc, index) => 
                    <Link to={loc.location}><button key={index}>{loc.location}</button></Link>
                ) : <h3>🤦‍♀️ No locations found.</h3>
            }
            <Welcome />
            </main>
        </div>  
    )
}

export default Locations