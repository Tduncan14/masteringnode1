const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('total :' + totalMemory);

// a Template string
// ES6 / ES2015 : ECMAScript 6