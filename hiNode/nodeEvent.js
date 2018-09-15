// the EventEmitter  asynchrous event handling in node

// load the event module

var events = require('events');
// create an instance eventEmitter

var em = new events.EventEmitter();
// two essential task attach an event handler to an even, and emit the actual event. The event hadnler is triggered when a specific event is emittedS
// the first parameter to the method is the name of the event, the second a function to process the event
