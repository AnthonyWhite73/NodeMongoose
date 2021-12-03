require("./db/connection");

const yargs = require("yargs");

const {addMovie, listMovie, listMovies, updateMovie, deleteMovie, listMoviesByTitle} = require("./movie/movieMethods");

const app = async(args) => {
    switch (process.argv[2]){
        case "add":
            addMovie({title: args.title, actor: args.actor, genre: args.genre, rating: args.rating});
            break;
        case "list":
            console.log("at list hit")
            listMovies();
            break;
        case "delete":
            deleteMovie({title: args.title});
            break;
        case "update":
            console.log("update hit");
            const newMovie2 = {
                title: process.argv[3],
                newTitle: process.argv[4]            
            };
            updateMovie(newMovie2);
            break;
        case "listByTitle":
            const listMovie2 = {
                title: process.argv[3]
            };
            listMoviesByTitle(listMovie2);
            break;
        default:
            console.log("Incorrect command");
    }
};

app(yargs.argv);