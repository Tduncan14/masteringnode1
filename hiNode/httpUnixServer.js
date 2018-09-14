// create server
// and callback function

// connecting to internet with the module
var http = require('http'); 
var fs = require('fs');

// creating the server with http

http.createServer(function(req,res){
    var query = require('url').parse(req.url).query;
    console.log(query);
    file = require('querystring').parse(query).file;

    // content Header
})
