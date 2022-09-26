const React = require('react')
const DefaultLayout = require("./layouts/default");

class Show extends React.Component {
    render() {
        const { tweet } = this.props
        const { comments } = this.props
        const { user } = this.props

        return (
            <DefaultLayout title="View Comments">

                <div className='bodyWide'>
                    {/* ternary template {user !== tweet.user ? <h1>b</h1> : <h1>a</h1>} */}
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <div className="tweetBox">

                        {/* tweet */}
                        <h3>{tweet.user}</h3>
                        <p>{tweet.message}</p>
                        <p>Likes: {tweet.likes} Comments: {tweet.comments}</p>

                        <h4>Last edit : {tweet.updatedAt.toString().slice(0, 24)}</h4>
                        <br />
                        <div className="side">

                        {/* edit button */}
                        {user === tweet.user ? <a className='button' href={`/tweets/${tweet._id}/edit`}>EDIT</a> : <p></p>}

                        {/* delete button */}
                        {user === tweet.user ? <form className='hide' action={`/tweets/${tweet._id}?_method=DELETE`} method="POST">
                            <input className='button' type="submit" value="DELETE" />
                        </form> : <p></p>}

                        </div>
                        <br />

                    </div>
                    <a className='button' href="/tweets">BACK TO FEED</a><br />

                    <form action={`/tweets/${tweet._id}/update?_method=PATCH`} method='POST'>
                        <h3>User: {user}</h3><br />
                        <textarea maxLength="140" rows="5" cols="30" name='message' required /><br />
                        <input className='button' type="submit" value='SUBMIT COMMENT' /><br />
                    </form>


                    <ul>
                        {comments.map((comment, i) => {
                            return <li key={i} >


                                <h3>{comment.user}</h3>

                                {/* comment */}
                                <p>{comment.message}</p>
                                <p>Likes: {comment.likes}</p>
                                {/* comment timestamp */}
                                <h4>{comment.createdAt.toString().slice(0, 24)}</h4>

                                {user === comment.user ? <div className="side"> <form className='hide'  action={`/tweets/${tweet._id}/${comment._id}/delete?_method=PATCH`} method="POST">
                                    <input className='button' type="submit" value="DELETE" />
                                </form> </div>: <p></p>}

                            </li>
                        })}
                    </ul>
                    <a className='button' href="/tweets">BACK TO FEED</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show


