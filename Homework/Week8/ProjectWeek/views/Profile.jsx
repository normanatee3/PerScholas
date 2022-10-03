const React = require('react')
const DefaultLayout = require("./layouts/default");
const doMath = (array)=>{
    let result = 0
    for(let i=0; i<array.length; i++){
        result += array[i].score
    }
    return result
}

class Profile extends React.Component {
    
    render() {
        const { user, username } = this.props
        const {achievements} = user
        console.log(user);
        return (
            <DefaultLayout title={`${user.username}'s profile`}>
                <div className='bodyWide'>
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    {/* my profile button */}
                    <a href={`/profile/${username}`} className="profile button">MY PROFILE</a>

                    <h2><img className='halfPic' src={user.image} alt="" /></h2>
                    {username === user.username
                        ? <a className='button' href={`/profile/${user.username}/update`}>EDIT USER</a>
                        : <></>}

                    <h2 className="smallBanner">Achievement Score: {doMath(achievements)}</h2>
                    <a className='button' href="/games">BACK TO GAMES</a><br />

                    <h2 className='smallBanner'>{user.username}'s Games</h2>

                    <ul>
                        {user.gamesOwned.map((game, i) => {
                            return <li className='hide bodyWide' key={i} >

                                <h2 className='bigBanner'>
                                    {game.title}
                                </h2>
                                <img src={game.image} alt="" className="fullPic" />
                                <h4 className='tinyBanner'>DLC owned for {game.title}</h4>

                                <ul>
                                    {user.dlcOwned.map((dlc, i) => {


                                        return <div>

                                            {dlc.game === game.title ?
                                                <li className='hide' key={i + 'a'} >

                                                    <h2 className='smallBanner'>
                                                        {dlc.title}
                                                    </h2>
                                                    <img src={dlc.image} alt="" className="fullPic" />





                                                </li>
                                                : <h4></h4>}
                                        </div>
                                    })}
                                </ul>
                                <h4 className='tinyBanner'>Achievements unlocked for {game.title}</h4>
                                <ul>
                                    {user.achievements.map((achievement, i) => {


                                        return <div>

                                            {achievement.parent_product === game.title ?
                                                <li className='hide' key={i + 'b'} >

                                                    <h2 className='smallBanner'>
                                                        {achievement.title}
                                                    </h2>
                                                    <img src={achievement.image} alt="" className="fullPic" />





                                                </li>
                                                : <h4></h4>}
                                        </div>
                                    })}
                                </ul>


                            </li>
                        })}
                    </ul>





                    <a className='button' href="/games">BACK TO GAMES</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Profile