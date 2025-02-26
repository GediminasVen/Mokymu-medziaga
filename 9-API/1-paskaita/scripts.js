axios.get('https://api.tvmaze.com/search/shows?q=batman')
    .then(response => console.log(response.data))
    .catch(error => console.error("Error fetching data:", error));
