const express = require('express');
const mongoose = require('mongoose');
const dishRoutes = require('./routes/dishRoutes');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dishes', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use('/api', dishRoutes);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
