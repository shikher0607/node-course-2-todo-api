//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Connect to Mongo DB Server because of: ' + err);
    }
    console.log("Connected to MongoDB @ Port 27017");
    const db = client.db('TodoApp');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5bcc84fb47eac69fb825a22c')
//    }, {
//        $set:{
//            completed: false
//        }
//    },{
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    }).catch((err) => {
//        console.log(err);
//    });

db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bcc84fb47eac69fb825a22c')
}, {
    $set:{
        completed: true
    }
},{
    returnOriginal: false
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});



    //client.close();
});