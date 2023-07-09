// Import packages onto app
import express from 'express'
import morgan from 'morgan'

// Import routes from the ./routes
import healthRoute from '@/routes/health-route'

// Setup constant variables
const PORT = process.env.APPLICATION_PORT ?? 5000

// Init express app
const app = express()

// Body parser
app.use(express.json())

// Detailed server logging
app.use(morgan('dev'))

// Setup routing
app.use('/health', healthRoute)

// Listen to specified port in .env or default 5000
app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`)
})
