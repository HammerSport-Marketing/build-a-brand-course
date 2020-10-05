'use strict';
const stripe = require('stripe')('sk_test_BKude3ntS4bqXqaQMvAlf5oa')
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    setUpStripe: async (ctx) => {
        let total = 100
        let validatedCart = []
        let receiptCart = []
        // Through ctx.request.body 
        // We will recieve the products and the quantity
        const {cart} = ctx.request.body
        await Promise.all(cart.map(async product => {
            const validatedProduct = await strapi.services.product.findOne({
                id: product.id
            })

            console.log("validatedProduct", validatedProduct)
            if(validatedProduct){
                validatedProduct.qty = product.qty

                validatedCart.push(validatedProduct)

                receiptCart.push({
                    id: product.id,
                    qty: product.qty
                })
            }
            
            return validatedProduct
        }))
        // Only the id of each product


        
        // Use the data from strapi to calculate the price of each prodcut
        // Basically calculate the total 
        total = strapi.config.functions.cart.cartTotal(validatedCart)
        console.log(total);

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: 'usd',
                // Verify your integration in this guide by including this parameter
                metadata: {cart: JSON.stringify(receiptCart)},
              });
    
              return paymentIntent
        } catch (err) {
            return {error: err.raw.message}
        }
    }
};
