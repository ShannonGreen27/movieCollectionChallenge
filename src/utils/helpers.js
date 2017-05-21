// Libs
import axios from "axios"

// helper file made to allow separation of controller layer from view layer
module.exports = {

    // gets the movie name from the user and makes an api call to omdb to get information for the movie 
	getMovieByName(movieName) {
    	const queryURL = `http://www.omdbapi.com/?apikey=1be39fa9&t=${movieName}&y=&plot=short&r=json`

    	return axios.get(queryURL)
            .then(response => {
    			return response
    		})
            .catch(err => {
                console.log(err)
            })
	},

    // adds the movie to the users library
	addMovie(movie) {

    	return axios.post("/movie/add", {
			Title: movie.Title,
			Genre: movie.Genre.split(", "),
			Actors: movie.Actors.split(", "),
			Year: movie.Year,
			Rating: movie.imdbRating,
            Poster: movie.Poster
    	})
        .then(response => {
            if (response) {
                return true
            }
		})
        .catch(err => {
            console.log(err)
        })
	},

    //calls the database with the information needed to update a movie record
    updateMovie(movie) {

        movie.Genre = movie.Genre.split(", ")
        movie.Actors = movie.Actors.split(", ")

        return axios.put("/movie/update", movie)
            .then(response => {
                return response
            })
            .catch(err => {
                console.log(err)
            })
    },

    //calls the database to delete a movie record by its id
    deleteMovieById(id) {
        return axios.delete(`/movie/delete/${id}`)
            .then(response => {
                return response
            })
            .catch(err => {
                console.log(err)
            })
    },

    //Populates the users library with initial data. Performed once the compnent it rendered.
    populateMovieDiary() {
        return axios.get("/movie")
            .then(response => {
                return response
            })
            .catch(err => {
                console.log(err)
            })
    },

    //calls the database with the information needed to return the records that match
    searchMovieDiary(searchTerm) {
        return axios.get("/movie/search", {
            params: {
                search: searchTerm
            }
        })
        .then(response => {
            return response
        })
        .catch(err => {
            console.log(err)
        })
    }
}
