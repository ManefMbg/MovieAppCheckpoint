import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import './movieList.css'


const MovieList = ({movies,searchByTitle, rating}) => {
  return (
    <div  className='movies'>
      {movies
        .filter(
          (eLt) => 
             eLt.title.toUpperCase().includes(searchByTitle.toUpperCase()) && 
             rating <= eLt.rate
      ) 
      .map((eLt, key) => (
      
    <MovieCard movie={eLt} key={eLt.id}  />
    ))}

    </div>

  )
}

export default MovieList