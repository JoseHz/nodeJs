const { urlencoded } = require('express');
const express = require('express');
const path = require('path');



//inicializations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/v1', require('./routes'))




//start server
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
})
