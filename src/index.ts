import express from 'express'
import router from './routes'

const app = express()
const port = 3001

app.use(express.json())

app.use('/', router) // Imports all router

app.listen(port, () => {
    // Cuando funcione
    console.log("Estamos al aire!")
})
