const { faker } = require('@faker-js/faker') ;
const { boom } require = ('@hapi/boom')


class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 10;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    }
  )}

  async findOne(id) {
    // const name = this.getTotal();
    return this.products.find(item => (item.id == id))
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);

    if (index === -1 ) {
      throw boom.notFound('product not found');
    }
    const products = this.products[index];
    this.products[index] = {
      ...products,
      ...changes
    };

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);

    if (index === -1 ) {
      throw boom.notFound('product not found');
    }

    this.products.splice(index,1);
    return { id };

  }
}

module.exports = ProductsService;
