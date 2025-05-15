import { Modal, Button } from "react-bootstrap";

const Details = ({ show, onHide, movie }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{movie?.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {movie ? (
                    <>
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                        <p><strong>Year:</strong> {movie.Year}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>Plot:</strong> {movie.Plot}</p>
                        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
w
export default Details;
