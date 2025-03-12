import axios from 'axios'
import MovieCard from '../components/MovieCard'

import { useState, useEffect } from "react"

const HomePage = () => {
    return (
        <>
        <h1 className='text-primary'>Bool Movies</h1>
        <h2><i>The greatest movies ever</i></h2>

        <div className='row row-cols-3 mt-4'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />

        </div>
        </>
    )
}

export default HomePage