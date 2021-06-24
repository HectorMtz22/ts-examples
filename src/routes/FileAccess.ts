import {FileAccess} from '../models/FileAccess'
import express from 'express'

const router = express.Router()

router.get('/', (_) => {
    console.log(FileAccess.ReadWrite)
})

export default router