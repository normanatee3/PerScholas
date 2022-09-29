const React = require('react')
const DefaultLayout = require("./layouts/default");

class Show extends React.Component {
    render() {
        const { game } = this.props
        const { dlc } = this.props
        const { user } = this.props

        return (
            <DefaultLayout title={game.title}>

                <div className='bodyWide'>
                    {/* ternary template {user !== game.user ? <h1>b</h1> : <h1>a</h1>} */}
                    {/* log out button */}
                    < form className='hide logout' action={`/logout`} method="POST" >
                        <input className='button' type="submit" value="LOG OUT" />
                    </form >

                    <div className="tweetBox">

                        {/* game */}
                        <h3>{game.title}</h3>
                        <p>{game.description}</p>
                        <img className='gamePic' src={game.image} alt="Broken Image" />

                        <br />
                        <div className="side">

                        {/* edit button */}
                        {user === 'admin' ? <a className='button' href={`/games/${game.title}/edit`}>EDIT</a> : <p></p>}

                        {/* delete button */}
                        {user === 'admin' ? <form className='hide' action={`/games/${game.title}?_method=DELETE`} method="POST">
                            <input className='button' type="submit" value="DELETE" />
                        </form> : <p></p>}

                        </div>
                        <br />

                    </div>
                    <a className='button' href="/games">BACK TO SHOP</a><br />

                    <ul>
                        {dlc.map((content, i) => {
                            return <li key={i} >


                                

                            </li>
                        })}
                    </ul>

                    <form action={`/games/${game.title}/update?_method=POST`} method='POST'>
                        <h2 className='side'>LEAVE A REVIEW</h2> <br />
                        <h3>User: {user}</h3><br />
                        Rating: <br /> 
                        <input type="number" name='rating' required />/10 <br />
                        Review: <br /> 
                        <textarea maxLength="140" rows="5" cols="30" name='message' required /><br />
                        <input className='button' type="submit" value='SUBMIT REVIEW' /><br />
                    </form>


                    
                    <a className='button' href="/games">BACK TO SHOP</a><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show


