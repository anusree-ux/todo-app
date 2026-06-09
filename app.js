const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add', (req, res) => {
    tasks.push(req.body.task);
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    tasks.splice(req.params.id, 1);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});