import { Link } from "react-router-dom"

const MovieCard = ({ movieProp }) => {

    const { id, title, director, abstract, image } = movieProp;

    return (
        <div className="card mb-4">
            <img className="card-img-top" 
            src={image} 
            alt={title} />
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <address><i>
                    By {director}
                </i></address>
                <p className="card-text">
                    {abstract}
                </p>
                <Link to={`movies/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard