import { graphql } from 'gatsby'
import React, {useState} from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"
import { formatPrice } from '../utils/format'
import ReactMarkdown from 'react-markdown'
import { addToCart } from '../utils/cart'

const ProductTemplate = ({ data }) => {
  const [qty, setQty] = useState(1)
  return (
    <Layout>
      <Img fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} />
      <h2>{data.strapiProduct.name}</h2>
      <ReactMarkdown source={data.strapiProduct.description} />
      <p>Price: {formatPrice(data.strapiProduct.price_in_cents)}</p>
      <input 
      type="number" 
      value={qty}
      onChange={(event) => setQty(event.target.value)}
      />
      <button
        onClick={() => addToCart(data.strapiProduct, qty)}
        style={{ fontSize: '20px', padding: '24px', borderRadius: '5px' }} >Add To Cart</button>
    </Layout>
  )
}

export default ProductTemplate

export const query = graphql`
query ProductQuery($id: String!) {
    strapiProduct(id: {eq: $id}) {
      name
      price_in_cents
      description
      strapiId
      thumbnail {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`