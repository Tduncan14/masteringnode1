// readline.js
// creates a new interface

var interface = readline.createInterface(process.stdin, process.stdout, null);

// ask question
interface.question( ">> What is the meaning of life? ", function(answer){
    console.log("what is the meaning of life?");
    interface.setPrompt(">>");
    interface.prompt();
});