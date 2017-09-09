const express=require('express');
const valid=require('express-validator');
const mongoose=require('mongoose');
const flash = require('connect-flash');
const session=require('express-session');
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const User=require('./model/users');
const config= require('./config/database');

app.use(express.static('static'));
app.set('view engine', 'ejs');

//mongoose
mongoose.connect(config.database,{useMongoClient: true});
mongoose.connection.on('connected',()=>{
  console.log('Connected to database '+config.database);
})

mongoose.connection.on('error',(err)=>{
  console.log('Error detected: '+err);
})



app.get('/',(req,res)=>{
  res.render('register')
})

app.post('/register',urlencodedParser,(req,res)=>{
  let newUser= new User({
  name: req.body.name,
  email: req.body.email,
  organisation: req.body.organisation,
  mobile: req.body.mobile

})
newUser.save((err)=>{
  if(err)
  res.send('User Not registered');
  else {
    res.send('User Registered');
  }
})
const msg = {
  to: req.body.email,
  from: 'tedxcet2017@gmail.com',
  subject: 'Kuddos!',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};


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
