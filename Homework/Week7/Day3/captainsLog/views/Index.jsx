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
                            

                            {log.title}
                            
                        </li>
                    })}

                </ul>
                

            </div>
        )
    }
}

module.exports = Index