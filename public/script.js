const socket = io(); //creates to io object for communication

setInterval(() => {
  socket.emit("from_client");
}, 1000);
