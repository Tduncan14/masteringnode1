// logging 

var http = require('http');
var fs = require('fs');

// writes out the numbers

function writeNumber(res){
    var counter = 0;

    // increment global, write client
    for(var i = 0;  i< 100; i++){
        counter++;
        res.write(counter.toString()+ '\n');
    }
}
// creates the server
http.createServer(function(req,res){
    var query =require('url').parse(req.url).query;
    var app =require('querystring').parse(query).file + ".txt";

    // content header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // write out numbers and calling out the function

    writeNumber(res);

    // timer to open file and read contents

    setTimeout(function() {
        console.log('opening ' + app);
        // open and read and file contents
        fs.readFile(app,'utf8', function(err, data){
            if(err)
              res.write('Could not find or open file for reading\n');
            
            else{
                res.write(data);
            }
            // response is done 
            res.end();
        });
    },2000);
}).listen(8125);

console.log('Server is running treek');