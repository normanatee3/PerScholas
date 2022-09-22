const React = require('react');

class Edit extends React.Component {
    render() {
        
        return (
            <div>
                <h1>Edit Pokemon page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/pokemon/${this.props.pokemon.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" /><br />
                    Image Link: <input type="text" name="img" value="http://img.pokemondb.net/artwork/" /><br />
                    <input type="submit" name="" value="Update Pokemon" />
                </form>
            </div>);
    }
}

module.exports = Edit;