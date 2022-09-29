const React = require('react')
const DefaultLayout = require("./layouts/default");

class Signup extends React.Component {
    render() {
        return (
            <DefaultLayout title="NUMA">

                <div className='bodyWide'>
                <h2>NEW USER SIGN UP</h2>


                    <form action="/signup" method='POST'>
                    <div className='side'>User:<input type="text" name='username' required /></div>
                    <div className='side'>Pass:<input type="password" name='password' required /></div>
                        <div className="side">

                        <input className='button' type="submit" value='REGISTER' /><br />

                        <a className='button' href="/login">BACK TO LOG IN</a>
                        </div>

                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Signup