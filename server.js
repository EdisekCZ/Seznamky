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
        let zprava = "uspěšně přihlášen.";
        io.emit('message', zprava, msg);
    });

    socket.on('chat', msg => {
        io.emit('chat', msg);
    });

    socket.on('send', (msg, name) => {
        io.emit('message', msg, name);
    });

    socket.on('logout', name => {
        io.emit('message', "se odpojil", name);
    });
});

const PORT = 5000 || process.env.PORT;
server.listen(PORT, function () {
    console.log(`Server funguje na portu ${PORT}`);
});