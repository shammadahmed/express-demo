const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/names/:name', (req, res) => res.send(`Hello ${req.params.name}`));

app.listen(3000, () => console.log('The server is running.'));
