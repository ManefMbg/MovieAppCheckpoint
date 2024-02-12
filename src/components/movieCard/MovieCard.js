import React from 'react'
import MovieRate from '../rating/Rating'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MovieCard = ({movie}) => {
  
  return (

    <Card style={{ width: '18rem', height: '50rem', marginTop:'2%', marginBottom:'4%' }}>
    <Card.Img variant="top" src={movie.posterUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <MovieRate rate={movie.rate} isRating={true}/>
      <div style={{display:'flex', margin:'2%'}}>

      <Link to={`/trailer/${movie.id}`}>
        <Button variant="primary" style={{ marginTop:'3rem'}} >Watch Trailer</Button>
        </Link>
      
      </div>
    </Card.Body>
  </Card>

  )
}

export default MovieCard