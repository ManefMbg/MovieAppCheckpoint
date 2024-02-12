import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import moviesData from './components/dataMovie/moviesData'


const Trailer = () => {
    const [movie, setMovie] = useState({})
    const params = useParams()

useEffect(() => {
  setMovie(moviesData.find(eLt=>eLt.id === +params.id))

  }
, [params.id])

const navigate = useNavigate()

  return (
    <div>
        <Container>
            <Row>
                <Col sm={8}>
                    <h1 style={{marginTop:'10rem', color:'white', fontSize:'60px' }}>
                        {movie.title}
                    </h1>
                    <p style={{marginTop:'7rem', color:'white', fontSize:'25px'}}>
                        {movie.description}
                    </p>
                    


                </Col>

                <Col sm={6}>
                    <iframe src={movie.trailer} title='movie' 
                    style={{
                        width:'700px', 
                        height:'400px', 
                        marginTop:'10rem', 
                        marginLeft:'15rem'}} />
                </Col>
                
            </Row>
            <Button variant="outline-light" onClick={()=>navigate(-1)} style={{ marginTop:'1rem', marginLeft:'14rem', width:'7rem', height:'3rem'}} >Go back</Button>
        </Container>
    </div>
  )
}

export default Trailer