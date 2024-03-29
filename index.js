import express from 'express'
import cors from 'cors'

import { addNewAnimal , getAllAnimals } from './src/animals.js'

const PORT = 3002

const app = express()
app.use(cors())
app.use(express.json()) // this tells express that our post will be jsaon

 app.get('/animals', getAllAnimals)
app.post('/animals', addNewAnimal)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`)
})