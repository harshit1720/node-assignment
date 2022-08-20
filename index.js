
const fs = require('fs')



fs.writeFile("file1.txt","Hello viewers, I m Harshit Tanwar",function(err){
  if(err){
    return console.log(err);
  }
  console.log("File Created!");
});
