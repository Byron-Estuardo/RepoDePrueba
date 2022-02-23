const WebSocket = require('ws');

//const ws;

const PORT = 5000;

const wsServer = new WebSocket.Server({
  
  port: PORT
  
});

wsServer.on('connection', function(socket) {
    console.log("A client just connected");
    
    socket.on('message', function(msg) {
        console.log("Received message from client: " + msg);
        //socket.send("take this back: "+msg);
        //mandarlo a todos los clientes
        wsServer.clients.forEach(function (client) {
            client.send("alguien dijo " + msg);
        });
    });
  });

console.log( (new Date()) + "El servidor esta escuchando al puerto" + PORT );
/*
wsServer.on('connection', function(socket) {
  console.log("A client just connected");
  
  socket.on('message', function(msg) {
    console.log("Received message from client: " + msg);
    wsServer.client.forEach(function (client) {
      client.send(msg);
    });
  });
  
});
*/