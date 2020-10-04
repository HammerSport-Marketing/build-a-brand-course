import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"
import { formatPrice } from '../utils/format'
import ReactMarkdown from'react-markdown'
import { addToCart } from '../utils/cart'

const ProductTemplate = ({data}) => (
    <Layout>
        <Img fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} />
        <h2>{data.strapiProduct.name}</h2>
        <ReactMarkdown source={data.strapiProduct.description} />
        <p>Price: {formatPrice(data.strapiProduct.price_in_cents)}</p>
        <button
        onClick={() => addToCart(data.strapiProduct)}
        style={{fontSize: '20px', padding: '24px', borderRadius: '5px'}} >Buy Now</button>
    </Layout>
)

export default ProductTemplate

export const query = graphql `
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