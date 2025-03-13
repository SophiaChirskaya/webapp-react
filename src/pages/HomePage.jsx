import axios from 'axios'
import MovieCard from '../components/MovieCard'

import { useState, useEffect } from "react"

const HomePage = () => {

    // settiamo lo stato del componente
    const [movies, setMovies] = useState([]);
    // funzione fetching
    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
        .then(
            res => {
                setMovies(res.data)
            }
        )
        .catch(err => console.log(err)
        )
    }

    // richiamo funzione fetch movies e 
    useEffect(fetchMovies, [])

    // funzione rendering delle MovieCard
    const renderMovies = () => {
        return movies.map(
            movie => {
                return (
                    <div className='col' key={movie.id} >
                        <MovieCard movieProp={movie} />

                    </div>
                )
            }
        )
    }


    return (
        <>
        <h1 className='text-primary'>Bool Movies</h1>
        <h2><i>The greatest movies ever</i></h2>

        <div className='row row-cols-3 mt-4'>
            {renderMovies()}
        </div>
        </>
    )
}

export default HomePage