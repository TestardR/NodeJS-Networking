const server = require('net').createServer();
let counter = 0;

// event emitter that fires every time a client connects to the server
// socket is an Event Emitter we can use
server.on('connection', socket => {
  socket.id = counter++;
  console.log('Client connected');
  socket.write('Welcome new client!\n');

  socket.on('data', data => {
    socket.write(`${socket.id}: `);
    socket.write(data);
  });

  //   socket.setEncoding('utf8');

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8000, () => console.log('Server bound'));
