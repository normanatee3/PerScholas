const React = require('react')
const DefaultLayout = require("./layouts/default");

class Dlc extends React.Component {
    render() {
        const { dlc, game, username } = this.props

        console.log(dlc);
        return (
            <DefaultLayout title={`${dlc.title}`}>
                <div className='bodyWide'>
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    {/* my profile button */}
                    <a href={`/profile/${username}`} className="profile button">MY PROFILE</a>

                    {/* {username !== 'admin' ? <></> : <></>} */}

                    {username !== 'admin'
                        ? <div className='gameBox'>

                            <h2 className='smallBanner'>Expansion for: {dlc.game}</h2>

                            <img className='gamePic' src={dlc.image} alt="Broken Image" />

                            <div className="side">
                                <h3>{dlc.price}</h3>
                                <form className='hide' action={`/buyDlc/${dlc._id}?_method=PATCH`} method='POST'>

                                    <input className='button' type="submit" value='BUY NOW' />
                                </form>
                            </div>

                            <h2>{dlc.description}</h2>
                        </div>
                        : <div className='bodyWide'>
                            <form className="gameBox" action={`/dlcUpdate/${dlc._id}?_method=PATCH`} method="POST">
                                Title: <br /> <input type="text" required name='title' defaultValue={dlc.title} /><br />
                                Description:<br /> <input type="text" required name='description' defaultValue={dlc.description} /><br />
                                Price:<br /> <input type="text" required name='price' defaultValue={dlc.price} /><br />
                                Image:<br /> <input type="text" required name='image' defaultValue={dlc.image} /><br />


                                <input className='button' type="submit" value={'SUBMIT'} />

                            </form>
                            <form className='hide' action={`/dlc/${dlc._id}?_method=DELETE`} method="POST">
                                <input className='button' type="submit" value="DELETE" />
                            </form>
                        </div>}


                    <a className='button' href={`/games/${game}`}>BACK TO GAME</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Dlc