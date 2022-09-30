const React = require('react')
const DefaultLayout = require("./layouts/default");

class Index extends React.Component {
    render() {

        const { games } = this.props
        const { user } = this.props
        return (
            <DefaultLayout title="Shop All Games">

                <div className='bodyWide'>
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <a className='hide' href="/games/new">
                        <h2 className='button bar'>LIST A NEW GAME</h2>
                    </a>
                    <ul>
                        {games.map((game, i) => {
                            return <li key={i} >

                                <div className="side">
                                    <h3>{game.title}</h3>
                                    <h3>{game.price}</h3>
                                </div>

                                <a href={`/games/${game.title}`}>

                                    <img src={game.image} alt="Broken Image" className="gamePic" />
                                </a>
                                <form className='hide' action={`/buy/${game.title}?_method=PATCH`} method='POST'>

                                <input className='button' type="submit" value='BUY NOW' />
                                </form>





                            </li>
                        })}
                    </ul>

                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index