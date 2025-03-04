const express = require('express');
const app = express();
const morgan = require('morgan')
const userModel = require ('./models/user')
const dbConnection = require('./config/db')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use (morgan('dev'))

app.set ("view engine" , "ejs")

app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/about',(req,res)=>{
    res.send("This Is about Page")
})
app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    
    res.render("ThankYou")})
    // For Registration Page and Creating user
app.post('/register', async (req,res)=>{
    const {username , email , password} = req.body

  const newUser = await  userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send(newUser)
})


app.get('/register',(req,res)=>{
    res.render("rejister")
})

//How to read All the Users Which is saved in data base

app.get('/all-users',(req,res)=>{
    userModel.find().then((users)=>{
        res.send(users)
    })
})

app.listen(3000)