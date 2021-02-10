import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import blogRoutes from './routes/blogRoutes.js'
import FAQRoutes from './routes/FAQRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import projectRoutes from './routes/projectRoutes.js'

dotenv.config()

const app = express()

connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/blog', blogRoutes)
app.use('/api/FAQ', FAQRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/projects', projectRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
