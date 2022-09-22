const React = require('react');

class Index extends React.Component {
    render() {
        // const myStyle = {
        //     color: '#ffffff',
        //     backgroundColor: '#000000',
        // };
        const { pokemon } = this.props;

        return(
            <div>
                <h1>See All The Pokemon!</h1>

                <ul>
                    {pokemon.map((mon, i) => {
                        return (
                            <li key ={i}>
                                
                                <a href= {`/pokemon/${i}`} >

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
