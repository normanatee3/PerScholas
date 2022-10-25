import React from 'react'

function ShopPage({ getMovies, movies }) {
    console.log(movies)
    const viewSwap = (key) => {
        let movies = document.querySelectorAll('.movieBox')
        let movie = document.getElementById(`${key}`)
        movies.forEach((el) => {
            el.classList.toggle('hide')
        })
        movie.classList.toggle('hide')
    }
    return (
        <div>
            <h1>Shop</h1>
            {
                movies ?
                    <>
                        {movies.results.map((movie, i) => {
                            return <div key={`${i}`}>
                                <div className='movieBox' onClick={() => viewSwap(`${i}`)}>
                                    <h3>
                                        {movie.titleText.text}

                                    </h3>
                                    <img className='moviePic' src={movie.primaryImage.url} alt="" />
                                </div>
                                <div className="movie hide" onClick={() => viewSwap(`${i}`)} id={`${i}`}>
                                    <h1>{movie.titleText.text}</h1>
                                </div>

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