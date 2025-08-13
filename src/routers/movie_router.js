import express from 'express'
import { getMovies } from '../controllers/movie_controller.js'
import { createMovie, deleteMovie, getMovieById, updateMovie } from '../controllers/movie_controller.js';
getMovies;

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.get("/", createMovie);
router.get("/:id", deleteMovie);
router.get("/:id", updateMovie);

export default router;