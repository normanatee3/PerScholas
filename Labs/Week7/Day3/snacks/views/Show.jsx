const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
    render() {
        const { snack } = this.props;
        return (
            <DefaultLayout title={"Snack Profile"}>
                <div>
                    <nav>
                        <a href="/snacks"> Back2 Pantry</a>
                    </nav>
                    <h1> {snack.name} Page </h1>
                    <img src={snack.imageLink} alt="" /><br />
                    {snack.name} are {snack.flavor} flavored, cost {snack.cost}
                    <br /> and they{" "}
                    {snack.isTasty
                        ? "BOMB"
                        : "NASTY AS A MUH"}
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Show;