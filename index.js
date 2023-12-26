const express=require("express");
const app=express();

const PORT=8000;

const url="mongodb://127.0.0.1:27017/url";

const urlRoute=require('./routes/url');

const {connectMongoDb}=require("./connect")
// app.use(express.json());


app.use(express.urlencoded({extended: false}));

connectMongoDb(url)
.then(() => console.log("connected successfully"))
.catch(() => console.log("No connection"));
app.use("",urlRoute);
app.listen(PORT,() =>{ console.log(`Server Created`);})