const React = require('react')
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component{
    render(){
        const {log} = this.props
        return(
            <DefaultLayout title="Edit Page">

            <div>



                <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                Title:<input defaultValue={log.title} type="text" name='title' required  /><br />
                Entry:<textarea defaultValue={log.entry} rows="15" cols="30" name='entry' required  /><br />
                Is the ship broken?:
                {log.shipIsBroken ? (
                    <input type="checkbox" name="shipIsBroken" defaultChecked />
                    ) : (
                        <input type="checkbox" name="shipIsBroken" />
                        )}
                <input type="submit" value='Submit Log' /><br />



                </form>
            </div>
                        </DefaultLayout>
        )
    }
}

module.exports = Edit