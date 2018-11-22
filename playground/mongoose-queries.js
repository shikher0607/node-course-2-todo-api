const {ObjectId} = require('mongodb');

const {mongoose} =  require('../server/db/mongoose');

const {users}  =require('../server/models/user');

var id = '5bf5afa63ef5ec24d87bc4cf';

if (!ObjectId.isValid) {
    console.log('ID not valid');
}

users.find({
    _id: id
}).then((docs) => {
    if(docs){
    console.log(docs);
}else{
    console.log('Id not found');
}
}).catch((err) => {
    console.log(err);
});

users.findOne({
    _id: id
}).then((docs) => {
    if(docs){
        console.log(docs);
    }else{
        console.log('Id not found');
    }
}).catch((err) => {
    console.log(err);
});

users.findById(id).then((docs) => {
    if(docs){
        console.log(docs);
    }else{
        console.log('Id not found');
    };
}).catch((err) => {
    console.log(err);
});