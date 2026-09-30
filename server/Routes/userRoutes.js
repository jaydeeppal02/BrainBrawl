const express=require("express")
const { register, login } = require("../controller/UserController")
const { addQuestion, getQuestions } = require("../controller/questionController")
const { submitQuiz } = require("../controller/quizController")


const userRouter=express.Router()

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.post('/add',addQuestion)
userRouter.get('/all',getQuestions)
userRouter.post("/submit",submitQuiz)




module.exports = userRouter