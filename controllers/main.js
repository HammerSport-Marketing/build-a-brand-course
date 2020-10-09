
exports.getCheckoutPage = (req, res, next) => {
  console.log("Middleware");
  res.send(
    `<form action="/admin/product" method="POST" >
          <input type="text" name="title">
          <button type="submit">Submit</button>
      </form>`
  );
};

exports.postCheckout = (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  }

exports.getIndexPage = (req, res, next) => {
    /**
     * sendFile() Detects the correct path based on operating system.
     */
    res.status(200).render('index', {pageTitle: 'Build A Brand'})
  }