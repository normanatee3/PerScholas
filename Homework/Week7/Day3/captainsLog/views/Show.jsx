const React = require('react')
const DefaultLayout = require("./layouts/default");

class Show extends React.Component{
    render(){
        return(
            <DefaultLayout title="Show Page">

            <div>
                <h1>CAPTAINS LOGS</h1>
                <h2>{this.props.log.title}</h2>
                <h3>{this.props.log.entry}</h3>
                <h3>{this.props.log.shipIsBroken
                ? "The ship is damaged! We need help soon or..."
                : "Our ship is still holding on..."}</h3>

                <h4>Last update : {this.props.log.updatedAt.toString()}</h4>
                <br /><br /><br />
                <a href="/logs">See all logs</a>
        



            
            </div>
                </DefaultLayout>
        )
    }
}

module.exports = Show