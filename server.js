require("dotenv").config();
const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const axios = require("axios")
const sendEmail = require("./mailer.js")

const PORT = process.env.PORT || 3000;

// configure bodyparser middleware

app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  
  app.use(bodyParser.json())

app.post("/api/sendMail", (req, res) => {
    console.log(req.body)
    console.log("hi")
    sendEmail(req.body.first, req.body.last)
});

// set app to static 
app.use(express.static(__dirname + "/public"));



app.listen(PORT, () => {
    console.log("Server listening on Port: " + PORT);
});