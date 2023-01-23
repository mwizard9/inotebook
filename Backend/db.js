const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Mwizard:maxweLL11!!@cluster0.kxsnfxs.mongodb.net/inotebook?retryWrites=true&w=majority"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;