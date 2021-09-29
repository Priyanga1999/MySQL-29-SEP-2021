
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@123"
});
con.connect(function(err)
{
    if(err) throw err;
    console.log("Connected Successfully");
})


/*const mysql=require('mysql')
var express = require('express')
var app = express()
const port = 7001
var bodyParser = require('body-parser');
app.use(bodyParser.json());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root@123",
  database:"mydb"
});

con.connect((err)=> {
    if(!err){
        console.log("DB connection success")// check the DB connection
    }else {
        console.log("DB connection Failed" +JSON.stringify(err,undefined,2))}//error in json formaT
     
});

*/