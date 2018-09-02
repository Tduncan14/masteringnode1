
var url ="http://mylogger.io/log";

function log(message){
    // send an Http request
    console.log(message);
}


// exporting this file.. making a private module go public with another export
   
// exports the function out of the module
module.exports.log = log;

// you can also export the variable outside of the moduel
module.exports.url = url;
