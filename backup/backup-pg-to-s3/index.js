require('dotenv').config(); 

const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
app = express();


cron.schedule("* * * * *", function() {
    console.log("running a task every minute");
});
app.listen(3128);

///////////////////////////////////////////////////////////
// var mainController = require("./controller/mainController");
// var controllerInstance = new mainController();
// controllerInstance.runBackup()
// .then(()=>{
//     console.log("here")
//     controllerInstance.runUpload()
// })
