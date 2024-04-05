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

const tasks = [
    {id: 1, name: "Purchase bananas for tomorrow"}
]

app.get('/tasks', async (req, res) => {
    res.send({tasks: tasks})
})

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = { app, server };
