import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'

function ShopPage({ getMovies, movies, activeMovie, setActiveMovie }) {
    console.log(movies)
    const viewSwap = (key) => {
        let allMovies = document.querySelectorAll('.movieBox')
        let movie = document.getElementById(`${key}`)
        allMovies.forEach((el) => {
            el.classList.toggle('hide')
        })
        movie.classList.toggle('hide')
        if (!activeMovie) {
            setActiveMovie(movies.results[key].primaryImage.url)
        } else { setActiveMovie('') }
    }

    return (
        <div className='page'>
            <Container style={{backgroundColor: "green"}} fluid>
                <Row>
                    <Col  as="h1" >SHOP</Col>
                </Row>
            </Container>
            {/* <div>
                <img className="bg" src={activeMovie} alt="" />
            </div> */}
            {
                movies ?
                    <>
                        <Row xs={1} md={2} className="g-4">
                            {movies.results.map((movie, i) => {
                                return <div className='moviePopOut' key={`${i}`}>
                                    <Col className="movieBox">
                                        <Card key={`${i}`} className="bg-dark text-white">
                                            <Card.Img style={{ height: '500px', opacity: ".35" }} src={movie.primaryImage.url} alt="Card image" />
                                            <Card.ImgOverlay className='d-flex flex-column'>
                                                <Card.Title as="h1">

                                                    {movie.titleText.text}

                                                </Card.Title>
                                                <Card.Text as="h4">

                                                    {movie.releaseDate.year}

                                                </Card.Text>
                                                <Container className='mt-auto'>

                                                    <Button onClick={() => viewSwap(`${i}`)} variant="secondary">More Info</Button>{' '}
                                                    <Button variant="primary">Rent</Button>{' '}
                                                    <Button variant="success">Buy Now</Button>{' '}
                                                </Container>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>


                                </div>
                            })}
                        </Row>
                        {movies.results.map((movie, i) => {
                                    {/* single view */}
                                    return <div className="movie hide" id={`${i}`}>
                                        <img onClick={() => viewSwap(`${i}`)} className='icon' src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="" />
                                        <h1>{movie.titleText.text}</h1>
                                        <img src={movie.primaryImage.url} alt="" className="bigPic" />
                                    </div>
                                    })}
                    </>
                    :
                    <>
                        <h3>*Products*</h3>
                    </>
            }










        </div>
    )
}

export default ShopPage

