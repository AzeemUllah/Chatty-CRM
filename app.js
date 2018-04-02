// Get dependencies
const express = require('express');
var session = require('express-session');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


var admin = require('firebase-admin');

var serviceAccount = require('./firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chattycrm-beta.firebaseio.com'
});


// Get our API routes
const auth = require('./routes/auth');

const app = express();

app.use(session({
  secret: "RazorBlade2017CES2016",
  name: "au-hrms",
  resave: true,
  saveUninitialized: true
}));



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Set our api routes
app.use('/api/auth', auth);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'views')));





// Catch all other routes and return the index file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function(){console.log('API running on localhost:'+port);});
