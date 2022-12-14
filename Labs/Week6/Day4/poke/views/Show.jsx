const React = require('react');

class Show extends React.Component {
    render() {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            
        };
        const poke = this.props.mon
        const {pokemon} = this.props;
        const index = pokemon.findIndex((element) => {
            return element.name === poke.name;
        })
        return(
            <div>
                <h1 style = {myStyle}>Gotta Catch 'Em All</h1>
                
                <h2>  {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}  </h2>
                <img src={poke.img + ".jpg"} alt="" />
                <br></br>
                <form action={`/pokemon/${index}?_method=DELETE`} method="POST">
                    <input type="submit" name="" value="Delete Pokemon" />
                </form>
                <a href={`/pokemon/${index}/edit`}>EDIT</a><br></br>
                <a href="/pokemon">BACK</a>
            </div>
        );


    }
}

module.exports = Show;
