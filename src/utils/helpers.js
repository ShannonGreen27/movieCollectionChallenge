import axios from "axios"

module.exports = {

	getMovieByName(movieName) {
    	const queryURL = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&r=json`

    	return axios.get(queryURL).then(response => {
			return response
		})
	},

	addMovie(movie) {
    	return axios.post("/movie/add", {
    			Title: movie.Title,
    			Genre: movie.Genre,
    			Actors: movie.Actors,
    			Year: movie.Year,
    			Rating: movie.imdbRating
    	}).then(response => {
			return response
		})
	}

}
