const { urlencoded } = require('express');
const express = require('express');
const path = require('path');

const { logErrors, errorHandler } = require('./middleware/error.handle')

//inicializations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(logErrors);
app.use(errorHandler);

//routes
app.use('/api/v1', require('./routes'))




//start server
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
})
