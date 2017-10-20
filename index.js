
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


let author_name='';
let author_email='';
let author_write='';
app.get("/",function(req,res,next){
    res.render('index');
});

app.post("/",function(req,res,next){
    res.render('index');
});


function email_check(num){
    return num 
}


app.listen(8080);


module.exports = {
    email_check
  }
  