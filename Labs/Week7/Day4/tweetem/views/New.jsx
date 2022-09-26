const React = require('react')
const DefaultLayout = require("./layouts/default");

class New extends React.Component {
    render() {
        const { user } = this.props

        return (
            <DefaultLayout title="New Tweet">

                <div className='bodyWide'>

                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <form action="/tweets" method='POST'>
                    <h3>User: {user}</h3><br /> 
                        <textarea maxLength="140" rows="5" cols="30" name='message' required /><br />
                        <input className='button' type="submit" value='SUBMIT TWEET' /><br />



                    </form>
                    <a className='button' href="/tweets">BACK TO FEED</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = New