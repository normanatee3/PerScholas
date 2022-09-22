const React = require('react')

class Index extends React.Component{
    render(){
        const {logs} = this.props
        return(
            <div>
                <h1>CAPTAINS LOGS</h1>
                <a href="/logs/new">
                    <h3>Enter New Log</h3>
                </a>
                <ul>
                    {logs.map((log, i)=>{
                        return <li key={i}>
                            
                            <a href={`/logs/${log.id}`}>
                            <h3>{log.title}</h3>

                            </a>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                        </li>
                    })}

                </ul>
                

            </div>
        )
    }
}

module.exports = Index