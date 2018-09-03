const EventEmitter = require('events');
// caps for both shows that is  a class/

const emitter = new EventEmitter();

//Register a listner
emitter.on('wow3', (arg) =>{
 console.log('Treek keep moving forward', arg);
});


// Raise an event.
emitter.emit('wow3',{id:1, url:'http://'});

// Emit making a noise, or produce something. signalling something happened/


// Raise an event
emitter.emit('new stuff',{data:"this is information"});