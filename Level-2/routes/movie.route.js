//ei page a model k import krna hota

const MovieModel = require("../models/movie.model");

const express = require("express");
const userRouter = express.Router();

userRouter.use(express.json());

//crud

userRouter.post("/create-movie", async (req, res) => {
  const { movieName, ratings, category, duration } = req.body;
  try {
    const bluePrint = new MovieModel({
      movieName,
      ratings,
      category,
      duration,
    });
    await bluePrint.save();
    res.status(200).send("movie created successfully");
  } catch (error) {
    res.status(404).send(`movie not created due to ${error}`);
  }
});

// Get all movies with filtering, sorting, and pagination
userRouter.get("/filter-movie", async (req, res) => {
  try {
    const { q, movieName, rating, sortBy, page = 1, limit = 10 } = req.query;
    const query = {};
    if (q) {
      query.movieName = { $regex: q, $options: "i" };
    }
    if (movieName) {
      query.movieName = movieName;
    }
    if (rating) {
      query.rating = rating;
    }
    const options = {
      sort: sortBy ? { [sortBy]: 1 } : {},
      skip: (page - 1) * limit,
      limit: parseInt(limit),
    };
    const filterPrint = await MovieModel.find(query, null, options);
    res.status(200).send({ msg: "movie get successfully", filterPrint });
  } catch (err) {
    res.status(404).send(`movie not getting due to ${error}`);
  }
});

//get movie by a id
userRouter.get("/get-movie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getPrint = await MovieModel.findById({ _id: id });
    if (!getPrint) {
      return res.status(404).send();
    }
    res.status(200).send({ msg: "movie get successfully", getPrint });
  } catch (error) {
    res.status(404).send(`movie not getting due to ${error}`);
  }
});

userRouter.patch("/update-movie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatePrint = await MovieModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.status(200).json({ msg: "movie updated successfully", updatePrint });
  } catch (error) {
    res.status(404).send(`movie not updated due to ${error}`);
  }
});

userRouter.delete("/delete-movie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletePrint = await MovieModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: "movie deleted successfully" });
  } catch (error) {
    res.status(404).send(`movie not updated due to ${error}`);
  }
});

module.exports = userRouter;
