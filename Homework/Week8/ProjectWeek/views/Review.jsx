const React = require('react')
const DefaultLayout = require("./layouts/default");

class Review extends React.Component {
    render() {
        const { user, review, game } = this.props

        console.log(game.title)
        return (
            <DefaultLayout title={`Review by: ${review.user}`}>
                <div className='bodyWide'>
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <form action={`/reviews/${review._id}?_method=PATCH`} method='POST'>

                        Review by: {review.user} <br />
                        <div className="side">

                            {user === review.user
                                || user === 'admin'
                                ? <input type="number" name='rating' defaultValue={review.rating} required />
                                : <h3>{review.rating}</h3>} <h3>/10</h3> <br />

                        </div>

                        {user === review.user
                            || user === 'admin'
                            ? <textarea maxLength="140" rows="5" cols="30" name='message' defaultValue={review.message} />
                            : <h3>{review.message}</h3>} <br />

                        {user === review.user
                            || user === 'admin'
                            ? <input className='button' type="submit" value='UPDATE REVIEW' />
                            : <p></p>}

                    </form>

                    <a className='button' href={`/games/${game.title}`}>BACK TO GAME</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Review