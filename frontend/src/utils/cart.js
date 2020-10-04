export const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCart = () => {
    try {
        const cart = JSON.Parse(localStorage.getItem('cart'))
        if (cart) {
            return cart
        }
    } catch (err) {

    }
    return []
}

export const addToCart = (product) => {
    const cart = getCart()
    // If the product is already there
    const indexOfProduct = cart.findIndex((alreadyInCart) =>
        alreadyInCart.strapiId === product.strapiId
    )

    if (indexOfProduct !== -1) {
        // Update the quantity
        cart[indexOfProduct].qty += 1
    } else {
        // Set the qty 1
        product.qty = 1
        // Push the product
        cart.push(product)
    }
    saveCart(cart)
}