const React = require('react')
const DefaultLayout = require("./layouts/default");

class Index extends React.Component{
    render(){
        const center = {
            backgroundImage: `url('https://giffiles.alphacoders.com/435/4352.gif')`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            
        }
        const white = {
            reallyWhite:{
                color: 'white'

            },
            justKidding:{
                color: 'black'
            }
        }
        const {logs} = this.props
        return(
            <DefaultLayout title="Index Page">

            <div style={center}>
                <h1 style={white.justKidding}>CAPTAINS LOGS</h1>
                <a href="/logs/new">
                    <h2 style={white}>Enter New Log</h2>
                </a>
                <ul style={{paddingRight: '200px'}}>
                    {logs.map((log, i)=>{
                        return <li key={i} style={{backgroundImage: `url('https://i.ibb.co/YZL6L3p/images-removebg-preview.png')`, backgroundSize: 'cover', width: '200%', height: '250px'}}>
                            
                            <a href={`/logs/${log.id}`}>
                            <h3 style={{paddingTop: '50px'}}>{log.title}</h3>
                            </a>
                            <h4>Log created : <br />
                            {log.createdAt.toString().slice(0, 24)}</h4>


                            <a href={`/logs/${log._id}/edit`}>
                                <button>EDIT</button>
                            </a>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                            
                        </li>
                    })}

                </ul>
                

            </div>
                    </DefaultLayout>
        )
    }
}

module.exports = Index