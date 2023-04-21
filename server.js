const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
   
   response.sendFile(__dirname + "/index.html");

});
/* Server kasutab get tüüpi käske üks korraga, mitte samal ajal */

app.get("/about", (request, response) => {
    response.send("Hello, I'm Christin. Nice to meet you.");

});

app.listen(3000, () => {
    console.log("Server is running on Port 3000.");

});
