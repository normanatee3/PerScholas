const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render(){
        const { snacks } = this.props;
        console.log(snacks);
        return(
            <DefaultLayout title ={"snackDashboard"}>
                <a href="/snacks/new">Create New snack</a>
                <ul>
                {snacks.map((snack, i)=>{
                    return <li key={i}>
                        <a href={`/snacks/${snack.id}`}>
                            {snack.name}
                        </a>
                        {' '}
                        are {snack.flavor} flavored <br />

                        cost {snack.cost}, and are
                        {snack.isTasty 
                        ? " BOMB"
                        : " NASTY AS A MUH"}
                        <br />
                        <a href={`snacks/${snack._id}/edit`}>Edit snack</a>

                        <form action={`/snacks/${snack._id}?_method=DELETE`} method = 'POST'>
                        <input type="submit" value="DELETE" />
                        </form>
                    </li>
                })}
                </ul>
            </DefaultLayout>
        )
    }
}
module.exports = Index