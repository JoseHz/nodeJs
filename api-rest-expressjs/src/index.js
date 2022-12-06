const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//start server
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
})