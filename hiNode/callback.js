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