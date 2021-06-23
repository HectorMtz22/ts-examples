import User from './User'
import express from 'express'

const app = express()

app.use('/user', User)

export default app