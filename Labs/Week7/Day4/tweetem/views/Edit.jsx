const React = require('react')
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
    render() {
        const { tweet } = this.props
        const { user } = this.props
        return (
            <DefaultLayout title="Edit Page">

                <div className='bodyWide'>

                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <form className='tweetBox' action={`/tweets/${tweet._id}?_method=PUT`} method='POST'>
                    <h3>User: {user}</h3><br />
                        <textarea maxLength="140" defaultValue={tweet.message} rows="5" cols="30" name='message' required /><br />


                        <input className='button' type="submit" value='UPDATE TWEET' /><br />



                    </form>
                    <a className='button' href="/tweets">BACK TO FEED</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit