// load http module
// connects it to the internet
// getting the modules
var http = require('http');
var fs = require('fs');

// create http server
http.createServer(function(req,res){
     // so it can read the file and open 
fs.readFile('hi.js','utf8', function(err ,data){
  res.writeHead(200,{'Content':'text/plain'});
    if(err)
      res.write('Could not find or open file for reading /n');
      else
      // if no error, write js file to client
      var globalValue;

exports.setGloball = function (val){
    globalValue=val;
};

exports.returnGlobal = function(){
    console.log(global);
    return globalValue;

};
      res.write(data);
      res.end();
  });
  // this listen to the port to connect it to or run it on
}).listen(8123,function(){console.log('bound to port 8123');});

console.log('Server running on 8123');