var stripe = require("stripe")("sk_live_••••••••••••••••••••••••");

const domain = await stripe.applePayDomains.create({
  domain_name: 'example.com',
});

module.exports = domain