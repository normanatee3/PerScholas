const React = require('react')
class Show extends React.Component {
    render () {
        const poke = this.props.mon
        return (
            <div>
                <h1> Cotta Catch 'Em All! </h1>
                <h2>
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                </h2>
                <img src= {poke.img + '.jpg'} alt="" />
                <br></br>
                <a href="/pokemon">BACK</a>
            </div>
        );
    }
}
module.exports  = Show;

