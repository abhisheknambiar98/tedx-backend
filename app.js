const express=require('express');
const valid=require('express-validator');
const mongoose=require('mongoose');
const flash = require('connect-flash');
const session=require('express-session')
const app = express();

const User=require('./model/users');

app.use(express.static('static'));
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
  res.render('register')
})


app.use(valid());
//express messages middleware
app.use(require('connect-flash')());

//session-flash
/* app.configure(function() {
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
});



app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
*/


app.listen(3000,()=>{
  console.log('Logged into port 3000!');
})
