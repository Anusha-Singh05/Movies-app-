import Movie from "../models/movie.js";

export async function getMovies(req, res) {
    try {
        const n = req.query.n || 2;
        const q = req.query.q || '';
        const page = req.query.page || 1;
        const movies = await Movie.find({
            $and: [
                {
                    title: { $regex: q, $options: "i" },
                },
                {
                    plot: { $regex: q, $options: "i" },
                }
            ],
        }).limit(n)
          .skip(n * (page - 1));
        res.json({
            "movies": movies
        })
    } catch (error) {
        res.json({
            mssg: "Error occured"
        })
    }
}