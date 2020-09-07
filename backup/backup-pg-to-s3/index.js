require('dotenv').config(); 

const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
app = express();
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`backup app listening at http://localhost:${port}`)
})
console.log("going to run a task every minute");
cron.schedule("* * * * *", function() {
    console.log("running a task every minute");
});

///////////////////////////////////////////////////////////
var mainController = require("./controller/mainController");
var controllerInstance = new mainController();
controllerInstance.runBackup()
.then(()=>{
    console.log("going to upload ")
    controllerInstance.runUpload()
})
