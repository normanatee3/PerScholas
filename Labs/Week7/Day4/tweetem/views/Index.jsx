const React = require('react')
const DefaultLayout = require("./layouts/default");

class Index extends React.Component {
    render() {

        const { tweets } = this.props
        const { user } = this.props
        return (
            <DefaultLayout title="Tweeter Feed">

                <div className='bodyWide'>
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <a className='hide' href="/tweets/new">
                        <h2 className='button bar'>Tweet Something</h2>
                    </a>
                    <ul>
                        {tweets.map((tweet, i) => {
                            return <li key={i} >


                                <h3>{tweet.user}</h3>

                                {/* tweet */}
                                <p>{tweet.message}</p>
                                <p>Likes: {tweet.likes} <a href={`/tweets/${tweet.id}`}> Comments: {tweet.comments} </a></p>
                                {/* tweet timestamp */}
                                <h4>{tweet.createdAt.toString().slice(0, 24)}</h4>


                            </li>
                        })}
                    </ul>

                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index