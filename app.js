// app.js
import express from 'express'
import cors from 'cors'
import uploadRoute from './routes/upload.js'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Routes
app.use('/api/upload', uploadRoute)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
