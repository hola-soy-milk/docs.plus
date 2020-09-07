require('dotenv').config(); 

const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
app = express();

console.log("going to run a task every minute");

cron.schedule("* * * * *", function() {
    console.log("running a task every minute");
});
app.listen(process.env.PORT);

///////////////////////////////////////////////////////////
// var mainController = require("./controller/mainController");
// var controllerInstance = new mainController();
// controllerInstance.runBackup()
// .then(()=>{
//     console.log("here")
//     controllerInstance.runUpload()
// })
