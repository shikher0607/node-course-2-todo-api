var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');

var {users} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/users', (req, res) => {
   // console.log(req.body);
    var user = new users({
        email: req.body.email
    });

    user.save().then((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.get('/users', (req, res) => {
    users.find().then((doc) => {
        res.send(doc);
    }).catch((err) =>{
        res.status(400).send(err);
    });
});

app.listen(3000, ()=> {
    console.log("Started Up the App @ Port 3000");
});