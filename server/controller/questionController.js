const Question = require("../models/questionsModels");

async function addQuestion (req,res){
   try {
     const {question,options,correctAnswer}=req.body

    if(!question || !options || !correctAnswer){
        return res.status(400).json({
            success:false,
            msg:"All fields are required"
        })
    }

    const existsQuestion = await Question.findOne({ question })

     
        if(existsQuestion){
            return res.status(401).json({
                success:false,
                message:"Question Already Exists"
            })
        }

    const newQuestion = await Question.create({
        question,
        options,
        correctAnswer
    })

    return res.status(201).json({
        success:true,
        msg:"Question added successfully",
        question:newQuestion
    })
    
   } catch (error) {
        return res.status(500).json({
            success:false,
            msg:"Server Error"
        })
   }
}

async function getQuestions(req,res){
    try {
        const questions= await Question.find();

        return res.status(200).json({
            success:true,
            questions
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            msg:"Server Error"
        })
    }
}

module.exports={getQuestions,addQuestion}