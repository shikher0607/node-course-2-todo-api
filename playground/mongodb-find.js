const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Connect to Mongo DB Server because of: ' + err);
    }
    console.log("Connected to MongoDB @ Port 27017");
    const db = client.db('TodoApp');

    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log('Unable to Fetch Data due to: ' + err);
    });
    // db.collection('Todos').find().count().then((docs) => {
    //     console.log('Todos', docs);
    //     //console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err) => {
    //     console.log('Unable to Fetch Data due to: ' + err);
    // });


    client.close();
});