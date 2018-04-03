const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;

// Pre-Middleware
app.use(bodyParser.json());

// Server Routes
app.use('/', require('./server/server'));

// Client Routes
app.use('/', express.static(path.join(__dirname, '/public/html')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/images', express.static(path.join(__dirname, '/public/images')));
app.use('/js', express.static(path.join(__dirname, '/public/js')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/html/index.html'));
});

// Start the Server
app.listen(port, function () {
    console.log('The app is up and running on port ' + port);
});
