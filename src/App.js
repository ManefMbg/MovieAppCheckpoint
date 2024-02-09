import React, { useState } from 'react';
import './App.css';
import MovieList from './components/movieList/MovieList';
import moviesData from './components/dataMovie/moviesData';
import AddMovie from './components/addMovie/AddMovie';
import NavBare from './components/navbar/NavBare';
import FilterByRate from './components/rating/Rating'


function App() {
  // useState for movieList
const [movies, setMovies] = useState(moviesData)

// useState for FilterByTitle
const [searchByTitle, setSearchByTitle] = useState('')

// useState for filterByRate
const [rating, setRating] = useState('')


// add function ----> adding movie to movies (array)
const AddM = (newMovie) => {
  setMovies([...movies, newMovie])
}

  return (
    <div className="App">

      <NavBare searchByTitle={searchByTitle} setSearchByTitle={setSearchByTitle}/>

      <FilterByRate rating={rating} setRating={setRating} isRating={false}/>

      <AddMovie AddM={AddM}/>

      <MovieList movies={movies} searchByTitle={searchByTitle} rating={rating}/>
      
    </div>
  );
}

export default App;
