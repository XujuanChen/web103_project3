import { pool } from '../config/database.js'
import '../config/dotenv.js'
import eventsData from '../data/events.js'

const createEventsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS events;
    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(255) NOT NULL, 
        website VARCHAR(255) NOT NULL,
        about TEXT NOT NULL,
        phone VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL
    )
    `
    try {
        await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}

const seedEventsTable = async () => {
    await createEventsTable()

    eventsData.forEach((event) => {
        const insertQuery = {
            text: `INSERT INTO events (name, website, about, phone, location, image, date, time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        }

        const values = [
            event.name,
            event.website,
            event.about,
            event.phone,
            event.location,
            event.image,
            event.date,
            event.time
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }
            console.log(`✅ ${event.name} added successfully`)
        })
    })
}

seedEventsTable()