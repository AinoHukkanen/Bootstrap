const urlToFetch = "https://fedeperin-harry-potter-api-en.herokuapp.com/characters"

fetch(urlToFetch)
	.then((res) => res.json())
	.then((data) => {
		// It brings all data at the API and it shows it at the console
		console.log(data)
	})
	.catch((e) => console.log(e));