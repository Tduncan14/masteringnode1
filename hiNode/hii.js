// load http module
var http = require('http');
var fs = require('fs');

// create http server
http.createServer(function(req,res){
    // open and read in hellowworld.js
    fs.readFile('hi.js')
})