const express = require("express");
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
require('./models/db');
const exphbs = require('express-handlebars');

const userController = require('./routes/userController');
const api = require('./routes/api');



app.use(bodyparser.urlencoded({
    extended : true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname : 'hbs', defaultLayout : 'mainLayout', layoutsDir : __dirname + '/views/layouts/', allowedProtoProperties : true}));
app.set('view engine', 'hbs');


app.use('/', userController);
app.use('/api', api);

app.listen(3000, (err)=>{
    if(!err){
        console.log("Server Connected ....");
    }else {
        console.log("Error in server connection : " + err);
    }
});