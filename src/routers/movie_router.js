import express from 'express'
import { getMovies } from '../controllers/movie_controller.js'
getMovies

const router = express.Router()

router.get("/", getMovies)

export default router