import { Link } from "react-router-dom"

const MovieCard = () => {
    return (
        <div className="card mb-4">
            <img className="card-img-top" src="http://localhost:3000/img/movies/matrix.jpg" alt="descrizione img" />
            <div className="card-body">
                <h5 className="card-title">
                    Movie Title
                </h5>
                <address><i>
                    By author name
                </i></address>
                <p className="card-text">
                    Some text goes here
                </p>
                <Link to="movie/2" className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard