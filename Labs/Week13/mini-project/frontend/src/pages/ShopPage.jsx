import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <Container fluid="md">
                <Row>
                    <Col>
                        <h1>
                            SHOP
                        </h1>
                    </Col>
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
                                    {/* <div className='movieBox' onClick={() => viewSwap(`${i}`)}>
                                    <h3>
                                        {movie.titleText.text}

                                    </h3>
                                    <img className='moviePic' src={movie.primaryImage.url} alt="" />
                                </div> */}
                                    <Col>
                                        <Card key={`${i}`} className="bg-dark text-white">
                                            <Card.Img style={{ height: '500px', opacity: ".35" }} src={movie.primaryImage.url} alt="Card image" />
                                            <Card.ImgOverlay>
                                                <Card.Title>
                                                    <h1>
                                                        {movie.titleText.text}
                                                    </h1>
                                                </Card.Title>
                                                <Card.Text>
                                                    <h4>
                                                        {movie.releaseDate.year}
                                                    </h4>
                                                </Card.Text>
                                                <Card.Text>

                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>

                                    {/* single view */}
                                    <div className="movie hide" id={`${i}`}>
                                        <img onClick={() => viewSwap(`${i}`)} className='icon' src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="" />
                                        <h1>{movie.titleText.text}</h1>
                                        <img src={movie.primaryImage.url} alt="" className="bigPic" />
                                    </div>

                                </div>
                            })}
                        </Row>
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

