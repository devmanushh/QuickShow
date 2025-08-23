import axios from "axios";
import mongoose from "mongoose";
import Movie from "../models/Movie.js";
import Show from "../models/Show.js";

// Controller function to get now playing movies from api
export const getNowPlayingMovies = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
      }
    );

    const movies = data.results;
    res.json({ success: true, movies: movies });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Controller function to add new movies from api
export const addShow = async (req, res) => {
  try {
    const { movieId, showsInput, showPrice } = req.body;

    // First check if movie exists in MongoDB
    let movie = await Movie.findOne({ tmdbId: movieId });

    if (!movie) {
      // fetch movie and cast data from tmdb
      const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
        }),
      ]);

      const movieApiData = movieDetailsResponse.data;
      const movieCreditsData = movieCreditsResponse.data;

      const movieDetails = {
        tmdbId: movieId, // ✅ store TMDB ID properly
        title: movieApiData.title,
        overview: movieApiData.overview,
        poster_path: movieApiData.poster_path,
        backdrop_path: movieApiData.backdrop_path,
        genres: movieApiData.genres,
        casts: movieCreditsData.cast,
        release_date: movieApiData.release_date,
        original_language: movieApiData.original_language,
        tagline: movieApiData.tagline || "",
        vote_average: movieApiData.vote_average,
        runtime: movieApiData.runtime,
      };

      movie = await Movie.create(movieDetails);
    }

    const showsToCreate = [];

    if (Array.isArray(showsInput)) {
      showsInput.forEach((show) => {
        const showDate = show.date;
        show.time.forEach((time) => {
          const dateTimeString = `${showDate}T${time}`;
          showsToCreate.push({
            movie: movie._id, // ✅ use Mongo ObjectId reference
            showDateTime: new Date(dateTimeString),
            showPrice,
            occupiedSeats: {},
          });
        });
      });
    }

    if (showsToCreate.length > 0) {
      await Show.insertMany(showsToCreate);
    }

    res.json({ success: true, message: "Show Added Successfully.." });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


// Controller to get all shows
export const getShows = async (req, res) => {
  try {
    const shows = await Show.find().populate("movie");
    res.json({ success: true, shows });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Controller to get shows by movieId
export const getShow = async (req, res) => {
  try {
    const { movieId } = req.params;
    const shows = await Show.find({ movie: movieId }).populate("movie");
    res.json({ success: true, shows });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
