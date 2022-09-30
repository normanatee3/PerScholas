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

                    <form className='gameBox' action={`/games/${game.title}?_method=PATCH`} method='POST'>

                        Game Title:<br /> <input type="text" defaultValue={game.title} name='title' required /><br />
                        Developer:<br /> <input type="text" defaultValue={game.dev} name='dev' required /><br />
                        Image Link:<br /> <input type="text" defaultValue={game.image} name='image' required /><br />
                        Description:<br />
                        <textarea  defaultValue={game.description} rows="5" cols="30" name='description' required /><br />
                        Price:<br /> <input type="text" defaultValue={game.price} name='price' required /><br />


                        <input className='button' type="submit" value='UPDATE GAME' /><br />



                    </form>
                    
                    <a className='button' href={`/games/${game.title}`}>BACK TO GAME</a><br />
                    

                    <form action="/dlc/post" method='POST'>
                        <h3>NEW DLC?</h3>
                        <input type="hidden" name='game' value={game.title} />
                        DLC Title:<br /> <input type="text" name='title' required /><br />
                        Description:<br />
                        <textarea rows="5" cols="30" name='description' required /><br />
                        Price:<br /> <input type="text" name='price' required /><br />
                        Image Link: <br /> <input type="text" name='image' required defaultValue={'https://react.semantic-ui.com/images/wireframe/image.png'} /><br />
                        <input className='button' type="submit" value='LIST DLC' /><br />



                    </form>
                    <br /><br />
                    <form action="/achievements/post" method='POST'>
                        <h3>NEW ACHIEVEMENT?</h3>
                        <input type="hidden" name='parent_product' value={game.title} />
                        Achievement Title:<br /> <input type="text" name='title' required /><br />
                        Unlock Condition:<br />
                        <textarea rows="5" cols="30" name='unlock' required /><br />
                        Score Value:<br /> <input type="text" name='score' required /><br />
                        Image Link: <br /> <input type="text" name='image' required defaultValue={'https://react.semantic-ui.com/images/wireframe/image.png'} /><br />
                        <input className='button' type="submit" value='LIST ACHIEVEMENT' /><br />



                    </form>

                    <br /><br />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit