var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

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

app.get('/users/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }
    users.findById(id).then((doc) => {
        if (!doc) {
            return res.status(404).send();
        }else{
            res.send({doc});
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, ()=> {
    console.log("Started Up the App @ Port 3000");
});