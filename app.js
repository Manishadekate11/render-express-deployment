const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema = new mongoose.Schema({
name: String
});
const item = mongoose.model("task", trySchema);
const todo = new item({
name: "Welcome to your todo list!"
});
const todo1= new item({
name: "Create some videos!"
});
const todo2 = new item({
name: "Learn DSA"
});
const todo3 = new item({
name: "Learn MERN Stack"
});
// todo.save();
// todo1.save();
// todo2.save();
// todo3.save();


app.get("/", function (req, res) {
item.find({}, function (err, foundItems) {
    if(err){
        console.log(err);
    }
    else{
        res.render("list", {dayej : foundItems});
     }
});
});

app.post("/", function (req, res) {
const itemName = req.body.ele1;
const todo4 = new item({
name: itemName
});
todo4.save();
res.redirect("/");
});
app.post("/delete", function(req,res){
const checkedItemId = req.body.checkbox1; 
item.findByIdAndRemove(checkedItemId, function(err){
    if(!err){
        console.log("Successfully deleted checked item.");
        res.redirect("/");
    }   
});
});

app.listen(3100, function() {
console.log("Server started on port 3000");
});
