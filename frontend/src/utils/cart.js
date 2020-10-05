export const setCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
/**
 * function getCart
 */
export const getCart = () => {
    try {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            return cart
        }
    } catch (err) {

    }
    return []
}
/**
 * 
 * @param {*} product 
 * @param {*} qty 
 */
export const addToCart = (product, qty = 1) => {
    const cart = getCart()
    // If the product is already there
    const indexOfProduct = cart.findIndex((alreadyInCart) =>
        alreadyInCart.strapiId === product.strapiId
    )

    if (indexOfProduct !== -1) {
        // Update the quantity
        cart[indexOfProduct].qty += 1

        if (cart[indexOfProduct].qty === 0) {
            // Remove the product from the cart
            cart.splice(indexOfProduct, 1)
        }
    } else {
        // Set the qty 1
        product.qty = 1
        // Push the product
        cart.push(product)  
    }
    setCart(cart)
  
}

// export const updateProductQuantity = (product, quantity) {
//     const cart = getCart()

//     const indexOfProduct = cart.findIndex((alreadyInCart) => 
//         alreadyInCart.strapiId === product.strapiId
//     )

//     if (indexOfProduct) {
        
//     }
// } 