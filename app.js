const express = require('express');
const app = express();

// deployment timestamp
const deployTime = new Date().toString();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// tasks stored as objects now
let tasks = [];

// Home route
app.get('/', (req, res) => {
    res.render('index', { tasks, deployTime });
});

// Add task
app.post('/add', (req, res) => {
    tasks.push({
        text: req.body.task,
        done: false
    });
    res.redirect('/');
});

// Delete task
app.post('/delete/:id', (req, res) => {
    tasks.splice(req.params.id, 1);
    res.redirect('/');
});

// Toggle done/undo
app.post('/toggle/:id', (req, res) => {
    const task = tasks[req.params.id];
    task.done = !task.done;
    res.redirect('/');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});