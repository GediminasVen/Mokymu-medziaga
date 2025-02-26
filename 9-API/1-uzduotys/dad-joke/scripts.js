async function fetchJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    let joke = await response.json();
    return joke;
  } catch (error) {
    throw error;
  }
}

document.querySelector("button").addEventListener("click", () => {
  fetchJoke()
    .then((data) => document.querySelector(".juokelis").innerHTML = data.joke)
    .catch(() =>
      console.log("Ha nu labas rytas, kas cia???? blogai tą requestą darai")
    );
});
