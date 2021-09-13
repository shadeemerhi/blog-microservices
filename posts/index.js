const express = require('express');
const { randonBytes } = require('crypto');

// Express instance
const app = express();

// Express configuration
const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: false }));


const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randonBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});