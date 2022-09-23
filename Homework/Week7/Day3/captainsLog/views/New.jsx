const React = require('react')
const DefaultLayout = require("./layouts/default");

class New extends React.Component{
    render(){
        return(
            <DefaultLayout title="New Page">

            <div>



                <form action="/logs" method='POST'>
                Title:<input type="text" name='title' required /><br />
                Entry:<textarea  rows="15" cols="30" name='entry' required /><br />
                Is the ship broken?:<input type="checkbox" name='shipIsBroken' /><br />
                <input type="submit" value='Submit Log' /><br />



                </form>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = New