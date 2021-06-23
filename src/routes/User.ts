import express, { Response } from 'express'
const router = express.Router()

router.get('/', (_, res: Response) => {
    res.send("Hola bro")
})

router.post('/', (req, res: Response) => {
    console.log(req)
    res.send("Just request")
})


export default router