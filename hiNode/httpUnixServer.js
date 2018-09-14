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
    res.writeHead(200,{'Content-Type':'text/plain'});
    
    // increment global, write to global
    for (var i = 0; i<100; i++) {
        res.write(i + '\n');
    }

    // open and read in file contents
    var data =fs.readFileSync(file, 'utf8');
     res.write(data);
     // once the connection is end and the data is recieved
     res.end();
     // listen to the connection to the port//function
}).listen('/tmp/node-server-sock');


