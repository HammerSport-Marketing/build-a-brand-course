import React from 'react'
import { getCart } from '../utils/cart'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
export default () => {
    const cart = getCart()
    return (
       <Layout>
           <SEO title={cart} />
           <div>
               {cart.map(product => (
                   <div>
                       {/* <Img fixed={} /> */}
                       <h3>Name</h3>
                       <p>Price</p>
                   </div>
               ))}
           </div>
       </Layout>
    )
}
