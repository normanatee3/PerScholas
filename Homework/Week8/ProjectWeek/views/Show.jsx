const React = require('react')
const DefaultLayout = require("./layouts/default");

class Show extends React.Component {
    render() {
        const { game, dlc, user, reviews, achievements } = this.props


        return (
            <DefaultLayout title={game.title}>

                <div className='bodyWide'>
                    {/* ternary template {user !== game.user ? <h1>b</h1> : <h1>a</h1>} */}
                    
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    


                    <div className="gameBox">

                        {/* game */}
                        <div className='side'>
                            <h3>{game.title}</h3>
                            <h3>{game.price}</h3>
                        </div>
                        <div className="side">

                            <h3>Developed by: {game.dev}</h3>
                        </div>
                        <p>{game.description}</p>
                        <img className='gamePic' src={game.image} alt="Broken Image" />

                        <br />
                        <div className="side">

                            {/* edit button */}
                            {user === 'admin' ? <a className='button' href={`/games/${game.title}/edit`}>EDIT</a> : <p></p>}

                            {/* delete button */}
                            {user === 'admin' ? <form className='hide' action={`/games/${game.title}?_method=DELETE`} method="POST">
                                <input className='button' type="submit" value="DELETE" />
                            </form> : <></>}

                        </div>
                        <br />

                    </div>
                    <a className='button' href="/games">BACK TO SHOP</a><br />

                    <h2>DLC</h2>
                    
                    <ul>
                        {dlc.map((each, i) => {
                            return <li key={i} >

                                <div className="side">

                                <a href={`/games/${game.title}/dlc/${each.title}`}>

                                    <img src={each.image} alt="Broken Image" className="gamePic" />
                                </a>
                                    <h3>{each.title}</h3>
                                </div>





                            </li>
                        })}
                    </ul>
                    <h2>ACHIEVEMENTS</h2>
                    
                    <ul>
                        {achievements.map((each, i) => {
                            return <li key={i} >

                                <div className="side">

                                <a href={`/games/${game.title}/achievements/${each.title}`}>

                                    <img src={each.image} alt="Broken Image" className="gamePic" />
                                </a>
                                    <h3>{each.title}</h3>
                                </div>





                            </li>
                        })}
                    </ul>


                    <form action={`/games/${game.title}/update?_method=POST`} method='POST'>
                        <h2 className='side'>LEAVE A REVIEW</h2> <br />
                        <h3>User: {user}</h3><br />
                        Rating: <br />
                        <input type="number" name='rating' required />/10 <br />
                        Review: <br />
                        <textarea maxLength="140" rows="5" cols="30" name='message' /><br />
                        <input className='button' type="submit" value='SUBMIT REVIEW' /><br />
                    </form>


                    <ul>
                        {reviews.map((review, i) => {
                            return <li key={i} >
                                <a href={`/reviews/${review._id}`}>
                                    Review
                                </a>

                                {' '}from:

                                {review.user} <br />

                                Rating: {review.rating}/10 <br />
                                <div className="side">

                                    Additional comments: {review.message.length > 0 ? review.message : 'None'}

                                    {user === 'admin'
                                        || user === review.user
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


