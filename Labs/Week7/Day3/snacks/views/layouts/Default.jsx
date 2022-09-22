const React = require('react')

class DefaultLayout extends React.Component {
    render(){
        return(
            <div>
                <html>
                    <head>
                        <title>{this.props.title}</title>
                    </head>
                    <body>
                        <h1>{this.props.title}</h1>
                        {this.props.children}
                    </body>
                </html>
            </div>
        );
    }
}

module.exports = DefaultLayout