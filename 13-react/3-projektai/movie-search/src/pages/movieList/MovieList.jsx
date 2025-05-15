import { useState } from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import List from "../../components/list/List";
import Details from "../../components/details/Details";

const API_URL = 'https://www.omdbapi.com';
const API_KEY = 'apikey=a2526df0';

const MovieList = () => {
    const [searchKeys, setSearchKeys] = useState("");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const onSearchInputChange = (event) => {
        setSearchKeys(event.target.value)
    }

    const onEnterPress = (event) => {
        if (event.key === "Enter") {
            console.log(`Ivedete: ${searchKeys}`)
            const url = `${API_URL}/?${API_KEY}&s=${searchKeys}`

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.Search) {
                        setMovies(data.Search);
                    } else {
                        setMovies([]);
                    }
                });
        }
    };

    const handleCardClick = (imdbID) => {
        fetch(`${API_URL}/?${API_KEY}&i=${imdbID}`)
            .then(res => res.json())
            .then(data => {
                setSelectedMovie(data);
                setShowModal(true);
            });
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedMovie(null);
    };

    return (
        <div>
            <Header text="Movie Search" />
            <SearchBar
                onChangeMethod={onSearchInputChange}
                onEnterPressMethod={onEnterPress} 
            />
            <List movies={movies} onMovieClick={handleCardClick}/>
            <Details show={showModal} onHide={handleClose} movie={selectedMovie} />

        </div>
    )
}

export default MovieList;