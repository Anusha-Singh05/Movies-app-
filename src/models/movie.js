import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        title: { type: String },
        poster: { type: String }
    }
)

const Movie = mongoose.model("Movie", movieSchema)
export default Movie;