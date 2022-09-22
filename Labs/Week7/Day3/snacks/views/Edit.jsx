const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                <form
                    action={`/snacks/${this.props.snack._id}?_method=PUT`}
                    method="POST"
                >
                    Name:{" "}
                    <input
                        type="text"
                        name="name"
                        defaultValue={this.props.snack.name}
                    />
                    <br />
                    flavor:{" "}
                    <input type="text" name="flavor" defaultValue={this.props.snack.flavor} />
                    <br />
                    cost:{" "}
                    <input type="text" name="cost" defaultValue={this.props.snack.cost} />
                    <br />
                    Image Link:{" "}
                    <input type="text" name="imageLink" defaultValue={this.props.snack.imageLink} />
                    <br />
                    Is it good?:
                    {this.props.snack.isTasty ? (
                        <input type="checkbox" name="isTasty" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isTasty" />
                    )}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = Edit;