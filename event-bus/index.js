const express = require('express');
const bodyParser = require('body-parser');
import axios from 'axios';

const app = express();

const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: false }));

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);

    res.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});