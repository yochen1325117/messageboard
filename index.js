
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const check_email_reg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/



app.get("/",function(req,res,next){
    res.render('index');
});

app.post("/",function(req,res,next){
    if(email_check(req.body.email)==true){

        res.render('index');
        

    }

});


function email_check(email){
    return check_email_reg.test(email)
}


app.listen(8080);


module.exports = {
    email_check
  }
  