const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var names = ["Sam"];

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})


app.post('/', function(req, res){
  var nameEntered = req.body.nameEntered;
  if(nameEntered == '' || !nameEntered.match(/[a-z]/i)){
    res.send("Dont fuck w me there is no such a name like that!");
    return;
  }
  if(names.includes(nameEntered)){
    res.send("trueeeeeeeeeeeee I know it");
  } else {
    names.push(nameEntered);
    res.send("Ok I added it! try again to make sure am a good kid!");
  }
  console.log(names);
});

app.listen(3000, function(){
  console.log("Server is running");
});
