
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
module.exports = app
// module.exports = email_check

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const check_email_reg = /^[A-Za-z]+(\.)?[A-Za-z]+@(([a-zA-Z0-9]+)(\.){1})+[A-Za-z0-9]+$/
const check_name_reg = /^[A-Za-z]+\.?[A-Za-z]+$/



app.get("/", function(req,res,next){
    res.render('index');
});

app.post("/",email_check,name_check,function(req,res){
        // if(name_check(req.body.name)==true)
        res.render('index');
        console.log(req.body);
});


function email_check(req,res,next){
    if(check_email_reg.test(req.body.email)==true){
        next()
        return true
    }else{
        next();
        console.log('wrong email')
    }
}

function name_check(req,res,next){
    if(check_name_reg.test(req.body.author)==true){
        next()
    }else{
        console.log('wrong email')        
        next();
    }

}
 

app.listen(8080);

