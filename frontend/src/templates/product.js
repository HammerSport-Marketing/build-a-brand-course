import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const ProductTemplate = ({data}) => (
    <Layout>
        <h2>{data.strapiProduct.name}</h2>
        <p>content</p>
       { console.log(data)}
    </Layout>
)

export default ProductTemplate

export const query = graphql `
query ProductQuery($id: String!) {
    strapiProduct(id: {eq: $id}) {
      name
      price_in_cents
      description
      thumbnail {
        childImageSharp {
          fixed(width: 640) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`