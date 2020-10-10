
exports.getCheckoutPage = (req, res, next) => {
  res.status(200).render('checkout', {pageTitle: 'Secure Checkout Page'})
};

exports.postCheckout = (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  }

exports.getThankYouPage = (req, res, next) => {
  res.status(200).render('thank-you', {pageTitle: 'Thank You!'})
}

exports.getIndexPage = (req, res, next) => {
    /**
     * sendFile() Detects the correct path based on operating system.
     */
    res.status(200).render('index', {pageTitle: 'Build A Brand'})
  }

  // test ci/cd