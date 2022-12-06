const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker') ;

//settings
app.set('port', process.env.PORT || 3000);

//routes
app.get("/", (req,res) => {
  res.send('hello world')
})

app.get("/products", (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })

    res.json(products)
  }

})

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.send({
      id,
      name: 'lechuga',
      price: 5
    })
})

app.get('/users', (req,res) => {
  const {limit, offset} = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay limits and params')
  }
})

//start server
app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
})
