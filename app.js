// grabbing the module and using it
// now i am able to use the methods
const fs= fileSystem = require('fs');

const files =fs.readdirSync('./');

console.log(files);

fs.readdir('./', function(err,files){
    if(err){
        console.log('Error',err);
    }
    else{
        console.log('Result : ',files);
    }
});