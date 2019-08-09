const express = require('express');
const router = require('../people/peopleRouter');


const server = express();

server.use(express.json())
server.use(router)


server.get('/', (req, res) => {
  res.status(200).json({api: "running"})
})

module.exports = server;