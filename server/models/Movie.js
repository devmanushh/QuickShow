import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },  // TMDB id as string
    title: String,
    overview: String,
    poster_path: String,
    backdrop_path: String,
    genres: Array,
    casts: Array,
    release_date: String,
    original_language: String,
    tagline: String,
    vote_average: Number,
    runtime: Number,
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
