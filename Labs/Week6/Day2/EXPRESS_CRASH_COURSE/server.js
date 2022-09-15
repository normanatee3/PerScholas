const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const app = express ();
const ejs = require('ejs')






// use middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// members API routes
app.use('/api/members', require('./routes/api/members'))


// listen to port
const port = process.env.port || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));