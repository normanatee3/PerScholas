const React = require('react')
class Show extends React.Component {
    render () {
        const mon = this.props.mon
        return (
            <div>
                <h1> Cotta Catch 'Em All! </h1>
                <h2>
                    {mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}
                </h2>
                <img src= {mon.img + '.jpg'} alt="" />
                <a href="/pokemon">BACK</a>
            </div>
        );
    }
}
module.exports  = Show;

