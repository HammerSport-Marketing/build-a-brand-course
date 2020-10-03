import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import {formatPrice} from '../utils/format'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h2>Shop</h2>
    <div className="grid_container" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '20px'
    }}>
      {data.allStrapiProduct.nodes.map(product => (
        <div>
          <div>
            <Img fixed={product.thumbnail.childImageSharp.fixed} />
          </div>
          <h3 style={{ marginBottom: 0 }}>{product.name}</h3>
          <div className="product_price">{formatPrice(product.price_in_cents)}</div>
          <a href="/" className="add_to_cart">
            Add To Cart
          </a>
        </div>
    ))} 
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiProduct {
      nodes {
        created_at
        description
        id
        name
        price_in_cents
        strapiId
        thumbnail {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
