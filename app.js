// import dependencies
var express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan');

// create express app
var app = express(),
    port = process.env.PORT || 3000,
    publicDirectory = require('path').join(__dirname, '/public');

// middleware that serves up the favicon. before logging because it's really just noise
// app.use(favicon(publicDirectory + '/favicon.ico'));

// logging middleware
app.use(morgan('dev'));

// middleware for serving up static content from public directory
// this will terminate the pipeline if a file is found to match the request
app.use(express.static(publicDirectory));

// start the server
app.listen(port, function(){
    console.log("Express server listening on port %s", port);
});