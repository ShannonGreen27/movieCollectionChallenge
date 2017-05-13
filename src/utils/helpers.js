// Libs
import axios from "axios"

module.exports = {

	getMovieByName(movieName) {
    	const queryURL = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&r=json`

    	return axios.get(queryURL).then(response => {
			return response
		})
        .catch(err => {
            console.log(err)
        })
	},

	addMovie(movie) {
    	return axios.post("/movie/add", {
    			Title: movie.Title,
    			Genre: movie.Genre,
    			Actors: movie.Actors,
    			Year: movie.Year,
    			Rating: movie.imdbRating,
                Poster: movie.Poster
    	}).then(response => {
			return response
		})
        .catch(err => {
            console.log(err)
        })
	},

    updateMovie(movie) {
        return axios.put("/movie/update", movie)
        .then(response => {
            return response
        })
        .catch(err => {
            console.log(err)
        })
    },

    deleteMovieById(id) {
        return axios.delete(`/movie/delete/${id}`).then(response => {
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
    }

}
