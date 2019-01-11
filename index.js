const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use((req, res, next) => {
    console.log(`${req.url} - ${new Date()}`);
    next();
});

app.get('/', (req, res) => res.render('greeting', {name: 'World'}));

app.get('/names/:name', (req, res) => res.render('greeting', {name: req.params.name}));

app.listen(3000, () => console.log('The server is running.'));
