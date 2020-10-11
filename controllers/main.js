const Product = require("../models/product");
const stripe = require("stripe")("sk_live_3nKWqYfaolXmNiDdWUzMywib");
exports.getCheckoutPage = (req, res, next) => {
  res.status(200).render("checkout", { pageTitle: "Secure Checkout Page" });
};

exports.postCheckout = (req, res, next) => {
  let amount = 199979
  stripe.customers.create({
     email: req.body.email,
     // Verify your integration in this guide by including this parameter
   }).then(customer => stripe.charges.create({
     amount,
     description: 'Brand Building Course',
     currency: 'usd',
     customer: customer.id
   })).then(charge => res.render('thank-you'))
};

exports.getThankYouPage = (req, res, next) => {
  res.status(200).render("thank-you", { pageTitle: "Thank You!" });
};

exports.getAddProductPage = (req, res, next) => {
  res.status(200).render("add-product", { pageTitle: "Add A Product" });
};

exports.postAddProducts = (req, res, next) => {
  const title = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const thumbnail = req.body.thumbnail;
  const product = new Product(title, thumbnail, description, price);
  product.save();
  res.send("<h1>Done!</h1>");
};

exports.getIndexPage = (req, res, next) => {
  /**
   * sendFile() Detects the correct path based on operating system.
   */
  res.status(200).render("index", { pageTitle: "Build A Brand" });
};

// test ci/cd
