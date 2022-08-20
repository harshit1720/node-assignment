const express = require("express");

const app = express();


app.get("/", function(req , res){
  response.send("Hello World!");
})
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
