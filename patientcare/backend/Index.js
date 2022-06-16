import mongoose from "mongoose";
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import Back from "./Router/Back.js";




const app=express();

const url="mongodb+srv://danish:danish4590933@cluster0.qc6u4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connected...."));

app.listen(5000);

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

 app.use('/patientcare',Back)
 









