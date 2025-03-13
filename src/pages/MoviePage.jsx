import axios from 'axios'
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import ReviewCard from "./../components/ReviewCard"
import ReviewForm from "./../components/ReviewForm"

import React from 'react'


const MoviePage = () => {

    // recupero id del libro richiesto
    const { id } = useParams();

    // redirect con il useNavigate
    const redirect = useNavigate();

    // set stato componente
    const [movie, setMovie] = useState({});

    // funzione chiamata all'API per richiesta libro
    const fetchMovie = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
        .then(
            res => {
                setMovie(res.data)
            }
        )
        .catch(err => {
            console.log(err);
            if (err.status === 404) redirect("/404")
            
        })
    }

    // chiamata all'API al montaggio del componente
    useEffect(fetchMovie, [])

    // funzione rendering reviews
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={reviews} />
        )
    }

    return (
        <>
        <header id="book" className="border-bottom border-1 mb-3">
            <div className="d-flex mb-3">
                <img className="book-img"
                src={movie.img}
                 alt={movie.title} />
                 <div>
                    <h1>{movie.title}</h1>
                    <h3 className="text-muted">
                        <i>
                            By {movie.director}
                        </i>
                    </h3>
                    <p>
                        {movie.abstract}
                    </p>
                 </div>
            </div>

        </header>

        <section id="reviews">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h4>Our community reviews</h4>
            </header>

            {renderReviews()}

        </section>

        <section>
            <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />

        </section>

        <footer className="border-top border-1 pt-2 mb-3 d-flex jstify-content-end">
            <Link className="btn btn-secondary" to="/">Back to home</Link>

        </footer>
        </>
    )
}
    

export default MoviePage