const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Snack Page"}>
                <div>
                    <form action="/snacks" method="POST">
                        Name: <input type="text" name="name" />
                        <br />
                        flavor: <input type="text" name="flavor" />
                        <br />
                        cost: <input type="text" name="cost" />
                        <br />
                        Image Link: <input type="text" name="imageLink" />
                        <br />
                        Is it good tho? <input type="checkbox" name="isTasty" />
                        <br />
                        <input type="submit" name="" value="Create Snack" />
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;