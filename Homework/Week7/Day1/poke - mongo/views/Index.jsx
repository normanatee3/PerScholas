const React = require('react');

class Index extends React.Component {
    render() {
        // const myStyle = {
        //     color: '#ffffff',
        //     backgroundColor: '#000000',
        // };
        

        return(
            <div>
                <h1>See All The Pokemon!</h1>

                <ul>
                    {this.props.pokemon.map((mon, i) => {
                        return (
                            <li key ={i}>
                                
                                <a href= {`/pokemon/${mon.id}`} >

                                {mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}

                                </a>

                                <br/>

                                
                            </li>
                        );
                    })}
                </ul>
                <a href="/pokemon/new">CREATE NEW POKEMON</a>
            </div>
        );


    }
}

module.exports = Index;
