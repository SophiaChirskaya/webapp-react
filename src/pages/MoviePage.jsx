import { Link } from "react-router-dom"

import ReviewCard from "../components/ReviewCard"

const MoviePage = () => {
    return (
        <>
        <header id="book" className="border-bottom border-1 mb-3">
            <div className="d-flex mb-3">
                <img className="book-img" src="http://localhost:3000/img/movies/matrix.jpg"
                 alt="descrizione img" />
                 <div>
                    <h1>Movie Title</h1>
                    <h3 className="text-muted">
                        <i>
                            By Author name
                        </i>
                    </h3>
                    <p>
                        Some text goes here
                    </p>
                 </div>
            </div>

        </header>

        <section id="reviews">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h4>Our community reviews</h4>
            </header>

            <ReviewCard />
            <ReviewCard />
            <ReviewCard />

        </section>
        <footer className="border-top border-1 pt-2 mb-3 d-flex jstify-content-end">
            <LInk className="btn btn-secondary" to="/">Back to home</LInk>

        </footer>
        </>
    )
}
    

export default MoviePage