const express = require("express");
const fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/assets", express.static("./assets"));

require("./api/html-routes")(app);
require("./api/api-routes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
