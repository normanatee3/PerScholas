const React = require('react');

class Edit extends React.Component {
    render() {
        const poke = this.props.mon
        const {pokemon} = this.props;
        const index = pokemon.findIndex((element) => {
            return element.name === poke.name;
        })
        return (
            <div>
                <h1>New Pokemon page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/pokemon/${index}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" /><br />
                    Image Link: <input type="text" name="img" /><br />
                    <input type="submit" name="" value="Update Pokemon" />
                </form>
            </div>);
    }
}

module.exports = Edit;