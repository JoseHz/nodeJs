const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');


//initialization
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine(
  {
    // extname: '.hbs',
    // layoutsDir: path.join(app.get('views'), 'layouts'),
    // partialsDir: path.join(app.get('views'), 'partials'),
    // defaultLayout: 'main',
  }
))
app.set('view engine', 'handlebars');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//global variables
app.use((req, res, next) => {
  next();
})

//routes
app.get('/', (req, res) => {
  res.render('home')
});

app.get('/about', (req,res) => {
  res.render('about')
})

//public files
app.use(express.static(path.join(__dirname, 'public')))

//starting server
app.listen(app.get('port'), (req,res) => {
  console.log(app.get('views'));
  console.log('Server on port: ' + app.get('port'));
})