// load modules 
// connect it to the http module
// stores the mdule in a variable for use

var http = require('http');
var fs = require('fs');

// create http server
http.createServer(function(req,res){
    // so it can read the file and open it 

    fs.readFile('hi.js','utf8',function(err,data){
        if(err)
        // writes that is an problemn if err equals true
        res.write('Could not find or open file for reading /n');


        else
        // if there is no error write the data that is being passed through

        res.write(data);
        // you need it to make a connection
    });
    // listen to the port for connections
}).listen(8123, function(){console.log('bound to port 8123');});

console.log('Server running on 8123');