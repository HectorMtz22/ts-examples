import express from 'express'
import User from './User'
import FileAccess from './FileAccess'


const app = express()

app.use('/user', User)
app.use('/file', FileAccess)

export default app