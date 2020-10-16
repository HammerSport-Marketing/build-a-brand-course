const Product = require("../models/product");
const stripe = require("stripe")("sk_test_BKude3ntS4bqXqaQMvAlf5oa");
exports.getCheckoutPage = async (req, res, next) => {
  let amount = 199979
  res.status(200).render("checkout", { pageTitle: "Secure Checkout Page", price: amount });
};

exports.postPaymentIntent = async (req, res, next) => {
  let amount = 199979
  const intent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'},
  });
  res.send({
    clientSecret: intent.client_secret
  });
};

exports.postCheckout = (req, res, next) => {
  let amount = 199979
//  return stripe.customers.create({
//      email: req.body.email,
//      // Verify your integration in this guide by including this parameter
//    }).then(customer => stripe.paymentIntents.create({
//      amount,
//      description: 'Brand Building Course',
//      currency: 'usd',
//      customer: customer.id
//    })).then(intent => stripe.confirmCardPayment(intent.client_secret, {
//      payment_method
//    }))
console.log(req.body);
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
