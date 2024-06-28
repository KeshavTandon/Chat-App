const express=require('express');
const http=require('http');
const socketio=require('socket.io');

const app=express();
const server=http.createServer(app);
const io=socketio(server); //to enable real time communication via WebSockets

io.on("connection", (socket) => {
    console.log("a user connected",socket.id);

    socket.on('from_client',()=>{
        //client will emit the event naming 'from_client' and the server will listen to it and whenever that event will occur it will log something
        console.log('event coming from client'); 
    })
}); //listens for connection

app.use('/',express.static(__dirname + '/public')); //to access the static files of HTML,CSS,JS

server.listen(3000,()=>{
    console.log('Server started');
})
