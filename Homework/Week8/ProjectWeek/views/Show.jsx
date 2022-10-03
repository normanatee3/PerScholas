const React = require('react')
const DefaultLayout = require("./layouts/default");

class Show extends React.Component {
    render() {
        const { game, dlc, username, reviews, achievements } = this.props


        return (
            <DefaultLayout title={game.title}>

                <div className='bodyWide'>
                    {/* ternary template {user !== game.user ? <h1>b</h1> : <h1>a</h1>} */}

                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >


                    {/* my profile button */}
                    <a href={`/profile/${username}`} className="profile button">MY PROFILE</a>


                    <div className="gameBox">

                        {/* game */}
                        <div className='side'>
                            <h2 className='weight'>{game.title}</h2>
                            
                        </div>
                        <div className="side">

                            <h2 className='weight'>Developed by: {game.dev}</h2>
                        </div>
                        <p className='weight'>{game.description}</p>
                        <img className='gamePic' src={game.image} alt="Broken Image" />

                        <br />
                        <div className="">
                        
                        <h3>{game.price}</h3>
{/* edit button */}
                            {username === 'admin' ? <a className='button' href={`/games/${game.title}/edit`}>EDIT</a> : <></> }

{/* delete button */}
                            {username === 'admin' ? <form className='hide' action={`/games/${game.title}?_method=DELETE`} method="POST">
                                <input className='button' type="submit" value="DELETE" />
                            </form> : <></>}

                            {username !== 'admin' ?<form className='hide' action={`/buyGame/${game.title}?_method=PATCH`} method='POST'>

<input className='button' type="submit" value='BUY NOW' />
</form>: <></>}
                        </div>
                        <br />

                    </div>
                    <a className='button' href="/games">BACK TO SHOP</a><br />

                    {username !=='admin' ?
                    <form action={`/games/${game.title}/update?_method=POST`} method='POST'>
                        <h2 className='side'>LEAVE A REVIEW</h2> <br />
                        <h3>User: {username}</h3><br />
                        Rating: <br />
                        <input type="number" name='rating' required />/10 <br />
                        Review: <br />
                        <textarea maxLength="140" rows="5" cols="30" name='message' /><br />
                        <input className='button' type="submit" value='SUBMIT REVIEW' /><br />
                    </form>
                    : <></>}

{/* DLC */}
                    <h2 className='smallBanner'>DLC</h2>

                    <ul className='subBox'>
                        {dlc.map((each, i) => {
                            return <li className='subItem' key={i} >

                                <div >
                                    <div className="side">

                                    <h3>{each.title}</h3>
                                    
                                    </div>

                                    <a href={`/games/${game.title}/dlc/${each.title}`}>

                                        <img src={each.image} alt="Broken Image" className="gamePic" />
                                    </a>
                                </div>




                            </li>
                        })}
                    </ul>
{/* achievements */}
                    <h2 className='smallBanner'>ACHIEVEMENTS</h2>

                    <ul className='subBox'>
                        {achievements.map((each, i) => {
                            return <li className='subItem' key={i} >

                                <div className="side">

                                    <a href={`/games/${game.title}/achievements/${each.title}`}>

                                        <img src={each.image} alt="Broken Image" className="gamePic" />
                                    </a>
                                    
                                </div>





                            </li>
                        })}
                    </ul>


                    <h2 className='smallBanner'>REVIEWS</h2>


                    <ul>
                        {reviews.map((review, i) => {
                            return <li className='review' key={i} >
                                <a href={`/reviews/${review._id}`}>
                                    Review
                                </a>

                                {' '}from:{' '}

                                <a href={`/profile/${review.user}`}>

                                    {review.user} <br />
                                </a>

                                Rating: {review.rating}/10 <br />
                                <div className="">
                                    <br />
                                    Additional comments: {review.message.length > 0 ? review.message : 'None'}

                                    {username === 'admin'
                                        || username === review.user
                                        ? <form className='hide' action={`/reviews/${review._id}?_method=DELETE`} method="POST">
                                            <input className='button' type="submit" value="DELETE" />
                                        </form>
                                        : <></>}
                                </div>


                            </li>
                        })}
                    </ul>

                    <a className='button' href="/games">BACK TO SHOP</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show


