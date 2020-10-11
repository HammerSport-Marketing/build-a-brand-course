const fs = require('fs');
const path = require('path')
module.exports = class Product {
  constructor(title, price, thumbnail, description) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.description = description;
    this.price = price
  }

  save() {
    const p = path.join(path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
    )
    fs.readFile(p, (err, fileContent) => {
        let products = [];
        if (!err) {
            products = JSON.parse(fileContent)
        }
        products.push(this)
        fs.writeFile(p, JSON.stringify(products), (err) => {
            console.error(err);
        })
    })
  }
  static fetchAll() {
    return products;
  }
};
