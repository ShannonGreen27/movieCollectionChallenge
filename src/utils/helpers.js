// Libs
import axios from "axios"

module.exports = {

	getMovieByName(movieName) {
    	const queryURL = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&r=json`

    	return axios.get(queryURL)
            .then(response => {
    			return response
    		})
            .catch(err => {
                console.log(err)
            })
	},

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

    deleteMovieById(id) {
        return axios.delete(`/movie/delete/${id}`)
            .then(response => {
                return response
            })
            .catch(err => {
                console.log(err)
            })
    },

    populateMovieDiary() {
        return axios.get("/movie")
            .then(response => {
                return response
            })
            .catch(err => {
                console.log(err)
            })
    },

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
