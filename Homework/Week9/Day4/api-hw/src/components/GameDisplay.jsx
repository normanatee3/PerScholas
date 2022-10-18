import React from 'react'

function GameDisplay({ games }) {
    const viewSwap = (key) => {
        let games = document.querySelectorAll('.gameBox')
        let game = document.getElementById(`${key}`)
        games.forEach((el) => {
            el.classList.toggle('hide')
        })
        game.classList.toggle('hide')
    }
    const loaded = () => {
        return (
            <div className='gameMenu'>
                {games.results.map((game, i) => {
                    return <div key={`${i}`}>
                        
                        <div className="gameBox" onClick={() => viewSwap(`${i}`)} >
                            <h3>
                                {game.name}
                            </h3>
                            <img src={game.background_image} alt="" className="gamePic" />
                        </div>
                        <div className={`game hide`} onClick={() => viewSwap(`${i}`)} id={`${i}`}>
                            <h1 className='bigText'>{game.name}</h1>
                            <h2>Released: {game.released}</h2>
                            <img src={game.background_image} alt="" className="gamePicBig" />
                            <p className="midText">  {game.rating} out of {game.rating_top} Stars by {game.reviews_count} players.</p>
                            <div className="picBox">
                                <img src={game.short_screenshots[3].image} alt="" className="lilPic" />
                                <img src={game.short_screenshots[1].image} alt="" className="lilPic left" />
                                <img src={game.short_screenshots[2].image} alt="" className="lilPic right" />
                            </div>
                                <br /><br /><br />
                        </div>
                    </div>
                })}

            </div>
        )
    }
    const loading = () => {
        return <h1>No Games to Display</h1>;
    };
    return games ? loaded() : loading();
}

export default GameDisplay