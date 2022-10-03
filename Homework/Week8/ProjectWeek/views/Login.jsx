const React = require('react')
const DefaultLayout = require("./layouts/default");

class Login extends React.Component {
    render() {
        return (
            <DefaultLayout title="NUMA">

                <div className='bodyWide'>
                <h2 className='smallBanner'>EXISTING USER LOG IN</h2>


                    <form action="/login" method='POST'>
                        <div className='side'> User: <input type="text" name='username' required /></div>
                        
                        <div className='side'>Pass: <input type="password" name='password' required /></div>
                        <div className='side'>

                        <input className='button' type="submit" value='LOG IN' /><br />

                        <a className='button' href="/signup">SIGN UP</a>
                        </div>

                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Login