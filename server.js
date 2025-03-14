const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Define a route for "/"
app.get('/', (req, res) => {
    res.send('Real-time Chat Server is Running!');
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room: ${room}`);
        socket.to(room).emit('message', `User ${socket.id} has joined the room`);
    });

    socket.on('chatMessage', ({ room, message }) => {
        io.to(room).emit('message', { user: socket.id, message });
    });

    socket.on('leaveRoom', (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room: ${room}`);
        socket.to(room).emit('message', `User ${socket.id} has left the room`);
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
