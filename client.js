const WebSocket = require('ws');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ws = new WebSocket('ws://localhost:8080/');

ws.on('open', () => {
    console.log("Client connected. Please enter your message.");
    rl.on('line', input => {
        ws.send(JSON.stringify(input));
    });
    rl.on('close', () => {
        console.log("good bye");
        process.exit(0);
    });
});

ws.on('message', data => {
    console.log(JSON.parse(data));
});

ws.on('error', error => {
    console.log(error);
});