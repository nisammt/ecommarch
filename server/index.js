const express = require('express')
const dbconnction = require('./config/db')
const mainRoute = require('./routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
dbconnction()

app.use(express.json())
app.use(cors({origin:["http://localhost:5173","https://mycarte45-nisamudheen-mts-projects.vercel.app/"],credentials:true,methods:["GET", "POST","PUT","DELETE"]}))
app.use(cookieParser())

app.get("/",(req,res,next)=>{
    res.json("hello world")
});
app.use("/main",mainRoute)

app.all("*",(req, res) =>{
   res.status(404).json({message:"end point  does not exist"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port${process.env.PORT}`)
})