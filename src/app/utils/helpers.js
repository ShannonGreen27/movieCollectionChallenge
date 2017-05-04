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
    		params: {
    			title: movie.Title,
    			genre: movie.Genre,
    			actors: movie.Actors,
    			year: movie.Year,
    			rating: movie.imdbRating
    		}
    	}).then(response => {
			return response
		})
	}

}
