const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//initialization
const app = express();

//setting
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars'),
}));
app.set('view engine', '.hbs');

//routes
app.get('/', (req,res) => {
  res.render('main')
});

//start server
app.listen(app.get('port'), () => {
  
  console.log(`Server is on: http://localhost:${app.get('port')}`)
})