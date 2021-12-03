const mongoose = require("mongoose");

const Movie = require("./movieModels")

exports.addMovie = async (movieObj) => {
    try {
        const movie = await new Movie(movieObj);
        await movie.save();
        console.log(`Successfully added ${movie.title} ${movie.actor} ${movie.genre} ${movie.rating}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    console.log("list movies hit")
    try {
        console.log(await Movie.find({}));
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        console.log("updateMovie");
        const update1 = await Movie.findOneAndUpdate({title: movieObj.title}, {$set: {title : movieObj.newTitle}});
        console.log(`Successfully updated from ${movieObj.title} to ${movieObj.newTitle}`)
        mongoose.connection.close();
    } catch (error)
    {
        console.log(error);
    }
}

exports.deleteMovie = async (movieObj) => {
    try {        
        console.log("deleteMovie")
        const movie = await Movie.deleteOne(movieObj);
        console.log(movie)
        console.log(`Successfully deleted ${movieObj.title}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
}

exports.listMoviesByTitle = async (movieObj) => {
    console.log("list movies by title hit")
    try {
        console.log(await Movie.findOne({title: movieObj.title}));
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
}