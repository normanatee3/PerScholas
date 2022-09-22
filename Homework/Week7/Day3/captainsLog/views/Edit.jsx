const React = require('react')

class Edit extends React.Component{
    render(){
        const {log} = this.props
        return(
            <div>



                <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                Title:<input defaultValue={log.title} type="text" name='title' /><br />
                Entry:<input defaultValue={log.entry} type="textarea" name='entry' /><br />
                Is the ship broken?:
                {log.shipIsBroken ? (
                <input type="checkbox" name="shipIsBroken" defaultChecked />
                    ) : (
                        <input type="checkbox" name="shipIsBroken" />
                    )}
                <input type="submit" value='Submit Log' /><br />



                </form>
            </div>
        )
    }
}

module.exports = Edit