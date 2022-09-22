const React = require('react')

class Show extends React.Component{
    render(){
        return(
            <div>
                <h1>CAPTAINS LOGS</h1>
                <h2>{this.props.log.title}</h2>
                <h3>{this.props.log.entry}</h3>
                <h3>{this.props.log.shipIsBroken
                ? "The ship is damaged! We need help soon or..."
                : "Our ship is still holding on..."}</h3>
                <br /><br /><br />
                <a href="/logs">See all logs</a>
        



            
            </div>
        )
    }
}

module.exports = Show