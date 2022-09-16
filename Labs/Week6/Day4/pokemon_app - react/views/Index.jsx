const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div>
                <h1>See all the Pokemon!</h1>
                <ul>
                    {pokemon.map((mon, i) => {
                        return (
                            <li>

                                <a href={`/pokemon/${i}`}>
                                    {mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}
                                </a>{' '}


                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
module.exports = Index;


