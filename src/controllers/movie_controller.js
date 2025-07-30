import Movie from "../models/movie.js";

export async function getMovies(req, res) {
    try {
        const n = req.query.n || 10;
        const movies = await Movie.find({}).limit(n)
        res.json({
            "movies": movies
        })
    } catch (error) {
        res.json({
            mssg: "Error occured"
        })
    }
}