const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

app.use(express.json());

var corsOptions = {
    origin: '*',
  }
app.use(cors(corsOptions))

const user = 'Garfield';
const password = 'miau';

const tasks = [
    {id: 1, name: "Purchase bananas for tomorrow", isTaskForToday: true},
    {id: 2, name: "Purchase tomatoes for tomorrow", isTaskForToday: false},
    {id: 3, name: "Purchase lettuce for tomorrow", isTaskForToday: false}
]

app.post('/login', async (req, res) => {
   // password hashing
    if (username === req.body.username && password === req.body.password) {
      res.send({login: 'ok'}) // token JWT
    } else {
      res.send({login: 'no'})
    }
})
app.get('/daily-tasks', async (req, res) => {
    res.send({tasks : tasks.filter(x => x.isTaskForToday)})
})

app.get('/all-tasks', async (req, res) => {
    res.send({tasks: tasks})
})

app.post('/task', async (req, res) => {
    
    tasks.push(req.body);
    res.send({tasks: tasks})
})

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = { app, server };
