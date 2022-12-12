const express = require('express');
const { urlencoded } = require('express');
const path = require('path');

const {logError, errorHandler} = require('./middleware/error.handler')

//inicializations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(logError);
app.use(errorHandler);

//routes
app.use('/api/v1', require('./routes'))




//start server
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
})
