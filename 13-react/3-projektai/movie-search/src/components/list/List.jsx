import { Row, Col, Card, Container } from "react-bootstrap";

const List = ({ movies, onMovieClick }) => {
    if (!movies || movies.length === 0) {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Movie not found</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.imdbID} md={3}>
                        <Card onClick={() => onMovieClick(movie.imdbID)}>
                            <Card.Img src={movie.Poster} />
                            <Card.Body>
                                <Card.Title>{movie.Title}</Card.Title>
                                <Card.Text>{movie.Type}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


export default List;
