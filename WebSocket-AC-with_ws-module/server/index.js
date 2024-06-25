// < - Without Socket.io - - - - - >

import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log("Server is listening....");
})

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    wss.on("message", (data) => {
        console.log("data from client : ", data);
        wss.send("thanks buddy");
    })
})