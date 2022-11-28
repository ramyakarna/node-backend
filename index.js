const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")
const port=4000;

console.log(Register)

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://karnaramya:Ramya05062@cluster0.bziadig.mongodb.net/firstDB?retryWrites=true&w=majority")
	.then(()=>{
		console.log("created mongodb database")
	})
	.catch((err)=>{
		console.log(err)
	})

app.get("/",(req,res)=>{
	res.send("hi i am a server")
})	

app.post("/register",(req,res)=>{
	//const{username,password}=req.bodyParser
	const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})
app.listen(port,()=>console.log("server is started"))