const EventEmitter = require('events');
// caps for both shows that is  a class/

const emitter = new EventEmitter();

//Register a listner
emitter.on('wow3', function(){
 console.log('Treek keep moving forward');
});


// Raise an event.
emitter.emit('wow3');

// Emit making a noise, or produce something. signalling something happened/
