// load http module
var http = require('http');
var fs = require('fs');

// create http server
http.createServer(function(req,res){
    // when she is hard headed but you love her
    fs.readFile('doc.js','utf8', function(err, data){
    res.writeHead(200,{'Content-Type':'text/plain'});
      if(err)
        res.write('Could not find or open file for reading\n');
      else
          // if no error, write Js file to client
          res.write(data);
          res.end();

    });
}).listen(8123,function(){console.log('bound to port 8123');});

console.log('Server running on 8123');