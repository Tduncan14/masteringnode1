// readline.js
// creates a new interface
var readline = require("readline");

var interface = readline.createInterface(process.stdin, process.stdout, null);

// ask question
interface.question( ">> What is the meaning of life? ", function(answer){
    console.log("what is the meaning of life?");
    interface.setPrompt(">>");
    interface.prompt();
});

// function to close interface
function closeInterface(){
    console.log('Leaving interface...');
    process.exit();
}
// Listen for .leave
interface.on('line', function(cmd){
    if(cmd.trim == '.leave'){
        closeInterface();
        return; }
        else{
            console.log("repeating command :" + cmd);
        }

        interface.setPrompt(">>");
        interface.prompt();
    });


    interface.on('close', function() {
        closeInterface();
    });
