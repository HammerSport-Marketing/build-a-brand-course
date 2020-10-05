import React, { useState, useCallback } from "react"
import {
  getCart,
  addToCart,
  shouldPayShipping,
  cartSubtotal,
  cartTotal,
  SHIPPING_RATE,
} from "../utils/cart"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { formatPrice } from "../utils/format"
export default () => {
  const cart = getCart()
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  return (
    <Layout>
      <SEO title={cart} />
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <Img
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                  fixed={product.thumbnail.childImageSharp.fixed}
                />
                <span>{product.name}</span>
              </td>
              <td>
                <p>{formatPrice(product.price_in_cents)}</p>
              </td>
              <td>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    addToCart(product, -1)
                    forceUpdate()
                  }}
                >
                  {" "}
                  -{" "}
                </span>
                {product.qty}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    addToCart(product, 1)
                    forceUpdate()
                  }}
                >
                  {" "}
                  +{" "}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Subtotal: {formatPrice(cartSubtotal(cart))} </h3>
      {shouldPayShipping(cart) && (
        <h3>Shipping : {formatPrice(SHIPPING_RATE)}</h3>
      )}
      {!shouldPayShipping(cart) && <h3>Shipping Included! </h3>}
      <h3>Total: {formatPrice(cartTotal(cart))}</h3>
    </Layout>
  )
}
