const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {

    socket.on('login', msg => {
        console.log (msg);
        msg.zprava = "uspěšně přihlášen.";
        socket.emit('message',msg);
    });

    socket.on('chat', msg => {
        socket.emit('chat', msg);
    });
/*
    socket.on('disconnect', () => {
        socket.emit('message', `Uživatel ${jmeno} se odpojil.`);
    });
*/
    socket.on('chatMessage', msg => {
        socket.emit('message', msg);
    });
});


const PORT = 5000 || process.env.PORT;
server.listen(PORT, function () {
    console.log(`Server funguje na portu ${PORT}`);
});