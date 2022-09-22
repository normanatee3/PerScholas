const React = require('react')
class Show extends React.Component {
    render () {
        const poke = this.props.mon
        const centerStyle = {
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            backgroundColor: "red",
            padding: "5px",
            borderRadius: "5px"
        }
        const backStyle = {
            fontSize: "20px",
            fontWeight: "900",
            backgroundColor: "black",
            color: "white",
            padding: "5px",
            borderRadius: "5px"
        }
        const nameStyle = {
            fontWeight: "900",
            backgroundColor: "black",
            color: "white",
            padding: "5px",
            borderRadius: "5px"
        }
        return (
            <div style={centerStyle}>
                <h1> Gotta Catch 'Em All! </h1>
                <h2 style = {nameStyle}>
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                </h2>
                <img src= {poke.img + '.jpg'} alt="" />
                <br></br>
                <a style={backStyle} href="/pokemon">BACK</a>
            </div>
        );
    }
}
module.exports  = Show;

