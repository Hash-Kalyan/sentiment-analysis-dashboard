
const express = require('express');
const kafka = require('kafka-node');
const cors = require('cors');

const app = express();
app.use(cors());
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new kafka.Consumer(client, [{ topic: 'sentiment', partition: 0 }]);

let sentiments = [];

consumer.on('message', function (message) {
    sentiments.push(JSON.parse(message.value));
});

app.get('/sentiments', (req, res) => {
    res.json(sentiments.slice(-100)); // Last 100 sentiments
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
