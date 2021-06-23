import express from 'express'
const router = express.Router()

router.get('/', (_, res) => {
    res.send("Hola bro")
})



export default router