const Movie = require("./movieModels")

exports.addMovie = async (movieObj) => {
    try {
        const movie = await new Movie(movieObj);
        await movie.save();
        console.log(`Successfully added ${movie.title}`)
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    console.log("list movies hit")
    try {
        console.log(await Movie.find({}));
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        console.log("updateMovie");
        const update1 = await Movie.findOneAndUpdate({title: movieObj.title}, {$set: {title : movieObj.newTitle}});
        console.log(`Successfully updated from ${movieObj.title} to ${movieObj.newTitle}`)
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
    } catch (error) {
        console.log(error);
    }
}