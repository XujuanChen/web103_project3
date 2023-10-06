import { pool } from '../config/database.js'
import '../config/dotenv.js'
import eventsData from '../data/events.js'

const createEventsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedOn TIMESTAMP NOT NULL
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
            text: 'INSERT INTO events (name, image, description, submittedOn) VALUES ($1, $2, $3, $4)'
        }

        const values = [
            event.name,
            event.image,
            event.description,
            event.submittedOn
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