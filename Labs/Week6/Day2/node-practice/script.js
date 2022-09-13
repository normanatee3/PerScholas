const request = require("./node-stuff/node_modules/request")

request(
    'https://www.nike.com',
    function(err, res, body) {
        console.log(body)
        console.log(err)
    }
);