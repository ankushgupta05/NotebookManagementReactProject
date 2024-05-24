const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ankushgupta0510:CsFPZiWLvF1uoASY@cluster0.5cprhpt.mongodb.net/"

// const mongoURI = "mongodb://localhost:27017/inotebook"

// const connenctToMongo = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log('Connected to mongoose')
//     })
// }

const connenctToMongo = ()=>{
    mongoose.connect(mongoURI,{useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('connect to mongod???')
    })
    .catch(()=>{
        console.log('faild to server')
    });
}

module.exports = connenctToMongo;
