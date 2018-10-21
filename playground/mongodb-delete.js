const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Connect to Mongo DB Server because of: ' + err);
    }
    console.log("Connected to MongoDB @ Port 27017");
    const db = client.db('TodoApp');

    // //deletemany
    // db.collection('Todos').deleteMany({text: 'Something in the DB'}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    // //deleteOne
    // db.collection('Todos').deleteOne({text : "Something"}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    //deleteFindanddelete
    db.collection('Todos').findOneAndDelete({completed : true}).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });


    //client.close();
});