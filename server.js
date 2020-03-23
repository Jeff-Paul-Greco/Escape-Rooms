const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// configure bodyparser middleware

app.use(express.urlencoded({ extended: false }))

// set app to static 
app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log("Server listening on Port: " + PORT);
});