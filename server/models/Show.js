import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
  {
    // Use String for TMDB id references
    movie: { type: String, required: true, ref: "Movie" },

    showDateTime: { type: Date, required: true },

    showPrice: { type: Number, required: true },

    // Ensure the key name is correct: occupiedSeats
    occupiedSeats: { type: Object, default: {} },
  },
  { minimize: false, timestamps: true } 
);

const Show = mongoose.model("Show", showSchema);

export default Show;
