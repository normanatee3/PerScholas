const React = require('react')
const DefaultLayout = require("./layouts/default");

class Achievement extends React.Component {
    render() {
        const { achievement, game, username } = this.props

        console.log(achievement);
        return (
            <DefaultLayout title={`${achievement.title}`}>
                <div className='bodyWide'>
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    {/* my profile button */}
                    <a href={`/profile/${username}`} className="profile button">MY PROFILE</a>

                    {username !== 'admin'
                        ? <div className='gameBox'>

                            <h2 className='smallBanner'>Achievement for: {achievement.parent_product}</h2>

                            <h2 className='tinyBanner'>{achievement.unlock}</h2>

                            <div className="side">

                                <form className='hide' action={`/unlock/${achievement._id}?_method=PATCH`} method='POST'>

                                    <input className='button' type="submit" value='UNLOCK' />
                                </form>
                            </div>

                            <img className='gamePic' src={achievement.image} alt="Broken Image" />

                        </div>
                        : <div className='bodyWide'>
                            <form className="gameBox" action={`/achievementUpdate/${achievement._id}?_method=PATCH`} method="POST">

                                Title:<br /><input type="text" required name='title' defaultValue={achievement.title} /><br />
                                Unlock:<br /><input type="text" required name='unlock' defaultValue={achievement.unlock} /><br />
                                Score:<br /><input type="number" required name='score' defaultValue={achievement.score} /><br />
                                Image:<br /><input type="text" required name='image' defaultValue={achievement.image} /><br />
                                

                                    <input type="submit" className='button' value={'SUBMIT'} />
                                
                            </form>
                                    <form className='hide' action={`/achievements/${achievement._id}?_method=DELETE`} method="POST">
                                        <input className='button' type="submit" value="DELETE" />
                                    </form>
                        </div>}

                    <a className='button' href={`/games/${game}`}>BACK TO GAME</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Achievement