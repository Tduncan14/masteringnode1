var val ;

var asynchFunction = function(data,callback) {
       console.log(data);
    process.nextTick(function(val){
       console.log( callback(val));
    })
    console.log( 8 + val)
};

 asynchFunction(data, talkTome)


 function data(){
     console.log("This is data coming towards you");
     console.log( 5*5);
 }


 function talkTome(){
     console.log(3+4);
 }
// call back functions with a timer 
 setTimeout(function(){
     callback(val);
 },)