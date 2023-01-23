const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Mwizard:maxweLL11!!@cluster0.odmicfm.mongodb.net/Notebook?retryWrites=true&w=majority"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;