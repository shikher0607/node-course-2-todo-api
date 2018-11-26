const {ObjectId} = require('mongodb');

const {mongoose} =  require('../server/db/mongoose');

const {users}  =require('../server/models/user');

// users.remove({}).then((doc) => {
//     console.log(doc);
// }).catch((err) => {
//     console.log(err);
// });

users.findOneAndDelete({_id:'5bfa5b3739203f4bace2ab03'}).then((user) => {
    console.log(user);
}).catch((err) => {
    console.log('error: ' + err);
});