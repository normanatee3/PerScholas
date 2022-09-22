const React = require('react');

class Show extends React.Component {
    render() {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            
        };
        
        return(
            <div>
                <h1 style = {myStyle}>Gotta Catch 'Em All</h1>
                
                <h2>  {this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}  </h2>
                <img src={this.props.pokemon.img + ".jpg"} alt="" />
                <br></br>
                <form action={`/pokemon/${this.props.pokemon.id}?_method=DELETE`} method="POST">
                    <input type="submit" name="" value="Delete Pokemon" />
                </form>
                <a href={`/pokemon/${this.props.pokemon.id}/edit`}>EDIT</a><br></br>
                <a href="/pokemon">BACK</a>
            </div>
        );


    }
}

module.exports = Show;
