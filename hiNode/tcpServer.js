// a tcp server is when the server is created it listens for too different events
// when data is recieved and when the client closes the connection

// streams are  data that are sent to another computer as binary information or a string information that is dthen
// converted to be read

var net = require('net');

var server = net.createServer(function(conn){
    console.log(connected);
    // when it is connected pass in data
    conn.on('close', function(data){
        console.log(data + ' from ' + conn.remoteAddress+ ' ')
    });
})