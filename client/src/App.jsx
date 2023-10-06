import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Events from './pages/Events'
import EventDetails from './pages/eventDetails';
import PageNotFound from './pages/PageNotFound'

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async() => {
    const response = await fetch('http://localhost:3001/events')
    const data = await response.json()
    setEvents(data)
    }
    fetchEvents()
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path:"/"
    },
    {
      path: "/events",
      element: <Events data={events}/>
    },
    {
      path:"/events/:id",
      element: <EventDetails data={events} />
    },
    {
      path:"/*",
      element: <PageNotFound />
    }
  ]);

  return (
    <div className="App">

      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="vite.svg" />
            <h1>Community Events </h1>
          </div>
          <div className="header-right">
            <Link to='/'><button>Home</button></Link>
          </div>
          <div className='header-right'>
            <Link to='/events'><button >All Events</button></Link>
          </div>
        </div>
      </header>

      {element}
        
    </div>
  )
}

export default App
