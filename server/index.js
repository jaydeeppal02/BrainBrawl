const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose");
const userRouter = require("./Routes/userRoutes");
require("dotenv").config();
const app=express()

app.use(express.json())

// middleware
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello We are on Server")
});
// Routes 
app.use("/quiz",userRouter)
try {
    mongoose.connect(process.env.DB_URL)
    console.log("We are connected")
} catch (error) {
    console.log("Throw error",error)
}

app.listen(process.env.PORT,()=>{
    console.log("We are on PORT On",process.env.PORT)
});