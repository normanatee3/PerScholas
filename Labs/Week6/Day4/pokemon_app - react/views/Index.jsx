const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        const centerStyle = {
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center"
        }
        const fontStyle = {
            fontSize: "20px",
            fontWeight: "900"
            
            
        }
        return (
            <div style = {centerStyle}>
                <h1>See all the Pokemon!</h1>
                <ol>
                    {pokemon.map((mon, i) => {
                        return (
                            <li>
                                <a  style = {fontStyle} href={`/pokemon/${i}`}>
                                    {mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}
                                </a>{' '}
                                <br />
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}
module.exports = Index;


