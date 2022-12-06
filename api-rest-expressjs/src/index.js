const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//routes
app.get("/", (req,res) => {
  res.send('hello world')
})

app.get("/products", (req, res) => {
  res.send([
    {
      name: 'lechuga',
      price: 5
    },
    {
      name: 'pera',
      price: 5
    },
    {
      name: 'manzana',
      price: 5
    },
  ])
})

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.send({
      id,
      name: 'lechuga',
      price: 5
    })
})

//start server
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
})
