var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@123",
});
con.connect(function(err){
    if(err)throw err;
    console.log("Connected");
    con.query("Create Database Connection",function(err,result)
    {
        if(err)throw err;
        console.log("database Created");
    });
});