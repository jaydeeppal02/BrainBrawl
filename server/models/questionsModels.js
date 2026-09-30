const mongoose=require('mongoose')

const questionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true,
        unique:true
    },
    options:{
        type:[String],
        required:true
    },
    correctAnswer:{
        type:String,
        required:true
    }
})

let Question= mongoose.model("Question",questionSchema)
module.exports=Question