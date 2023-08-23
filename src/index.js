const http = require("http");
const express = require("express");
const index = express();

const port = 3000;

const server = http.createServer(index);
server.listen(port, () => {
    console.log("server is running on this port " + port);
})