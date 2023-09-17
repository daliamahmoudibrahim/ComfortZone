const mongoose = require('mongoose');


const reviewSchema= mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    review:{
        type:String,
    },by:{
        type:String,
        require:true,
    }
})

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },category:{
        type:String,
        require:true
    },countInStock:{
        type:Number,
        require:true
    },price:{
        type:Number,
        require:true
    },rating:{
        type:Number,
        require:true,
    },
    reviews:[reviewSchema],
    image:{
        type:String,
        require:true
    },description:{
        type:String,
        require:true
    }
})

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;