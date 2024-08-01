const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    movieName: { type: String, required: true ,unique:true},
    ratings: Number,
    category: String,
    duration: Number,
  },
  {
    versionKey: false,
  }
);

const MovieModel=mongoose.model("movieVariety",movieSchema)

module.exports=MovieModel