const WebSocket = require('ws');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = "vvdn";

const wss = new WebSocket.Server({
    port: process.env.PORT || 8080
});

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message);
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err) console.log(err);
            console.log("Connected correctly to mongo server");

            const db = client.db(dbName);

            const collection = db.collection('documents');

            collection.insertOne({
                "message": JSON.parse(message)
            }, (err, result) => {
                if (err) console.log(err);
                console.log("document inserted");
                ws.send(message);
            });
        });
    });
});