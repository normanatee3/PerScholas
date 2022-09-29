const React = require('react')
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
    render() {
        const { game } = this.props
        const { user } = this.props
        return (
            <DefaultLayout title="Edit Page">

                <div className='bodyWide'>

                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <form className='tweetBox' action={`/games/${game.title}?_method=PUT`} method='POST'>

                        Game Title:<br /> <input type="text" defaultValue={game.title} name='title' required /><br />
                        Developer:<br /> <input type="text" defaultValue={game.dev} name='dev' required /><br />
                        Image Link:<br /> <input type="text" defaultValue={game.image} name='image' required /><br />
                        Description:<br />
                        <textarea  defaultValue={game.description} rows="5" cols="30" name='description' required /><br />
                        Price:<br /> <input type="text" defaultValue={game.price} name='price' required /><br />


                        <input className='button' type="submit" value='UPDATE GAME' /><br />



                    </form>
                    <a className='button' href="/games">BACK TO FEED</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit