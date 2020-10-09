  
/**
 * Establish Express Server
 */
const express = require("express");
const path = require('path')

// Admin Routing Import
const mainRoutes = require('./routes/main')

const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}));

// Use Main Routes
app.use(mainRoutes)
// Use Shop Routes

app.use((req, res, next) => {
  console.log('Server Error 404',req.body);
  res.status(404).render('404',{pageTitle: '404 Error'})
})

app.listen(4000);