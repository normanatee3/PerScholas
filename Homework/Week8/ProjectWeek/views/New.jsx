const React = require('react')
const DefaultLayout = require("./layouts/default");

class New extends React.Component {
    render() {

        return (
            <DefaultLayout title="New Game">

                <div className='bodyWide'>

                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <form action="/games/post" method='POST'>
                        Game Title:<br /> <input type="text" name='title' required /><br />
                        Developer:<br /> <input type="text" name='dev' required /><br />
                        Description:<br />
                        <textarea rows="5" cols="30" name='description' required /><br />
                        Price:<br /> <input type="text" name='price' required /><br />
                        <input className='button' type="submit" value='LIST GAME' /><br />



                    </form>
                    
                    <a className='button' href="/games">BACK TO GAMES</a><br />

                    

                </div>
            </DefaultLayout>
        )
    }
}

module.exports = New