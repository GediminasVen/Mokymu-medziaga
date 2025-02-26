async function fetchMovie(inputValue) {
  const url = `https://api.tvmaze.com/search/shows?q=${inputValue}`;
  const response = await fetch(url);

  return await response.json();
}

function onSearchClick() {
  let inputValue1 = document.getElementById("searchInput").value;
  if (inputValue1) {
    fetchMovie(inputValue1).then((data) => {
      const moviesContainer = document.createElement("div");
      moviesContainer.className = "movies-container";

      for (let movie of data) {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie";

        movieDiv.innerHTML = `
      <img src='${movie.show.image.medium}'>
      <h3>${movie.show.name} (${movie.show.premiered})</h3>
      <p>Genres: ${movie.show.genres.join(",")}</p>
      <p>${movie.show.summary}</p>
      `;

        moviesContainer.appendChild(movieDiv);
      }
      document.body.appendChild(moviesContainer);
    });
  }
}

