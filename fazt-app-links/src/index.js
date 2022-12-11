const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


//initialization
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({

    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars'),

}))
app.set('view engine', '.hbs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//global variables
app.use((req, res, next) => {
  next();
})

//routes
app.use(require('./routes'));
app.use(require('./routes/authentications'));
app.use('/links', require('./routes/links'))

//public files
app.use(express.static(path.join(__dirname, 'public')))

//starting server
app.listen(app.get('port'), (req,res) => {
  console.log('Server on port: ' + app.get('port'));
})