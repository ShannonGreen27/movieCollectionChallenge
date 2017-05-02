import axios from "axios"

module.exports = {

	getMovieByName(movieName) {
    	const queryURL = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&r=json`

    	return axios.get(queryURL).then(response => {
			return response
		})
	}
}
