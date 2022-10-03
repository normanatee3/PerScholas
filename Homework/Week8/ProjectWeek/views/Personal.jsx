const React = require('react')
const DefaultLayout = require("./layouts/default");

class Personal extends React.Component {
    render() {
        const {user} = this.props
        return (
            <DefaultLayout title="Update user">

                <div className='bodyWide'>
                


                    <form action={`/profile/${user.username}/update?_method=PATCH`} method='POST'>
                        Change profile picture? <br /> <input type="text" name='image' required defaultValue={user.image} /> <br />
                        Change password? <br /> <input type="password" name='password' required defaultValue={user.password} /> <br />
                        <input className='button' type="submit" value="SUBMIT" />

                    </form>
                    <form className='hide' action={`/profile/${user._id}?_method=DELETE`} method="POST">
                                <input className='button' type="submit" value="DELETE" />
                            </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Personal