const express=require('express');
const morgan =require('morgan');
const bodyParser=require('body-parser');
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const courseramodule=require('./Coursera');
const two=require('./two');
const three=require('./three');
const four=require('./four');
const review=require('./review');
app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use('/books',courseramodule);
app.use('/two',two);
app.use('/three',three);
app.use('/four',four);
app.use('/review',review);
app.post('/',(req,res)=>{
    
    res.json({
        message:"Customer succesfully logged in"
    });
})
module.exports=app;