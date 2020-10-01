import React from "react"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import Img from "gatsby-image";
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Store Home" />
      <h2>Shop for Stuff</h2>
  {data.allStrapiProduct.nodes.map(product => (
    <div>
      <h1>{product.name}</h1>
      <div>
      <Img fixed={product.thumbnail.childImageSharp.fixed} />
      </div>
    </div>
  ))}
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
        price_in_cent
        strapiId
        thumbnail {
          childImageSharp {
            fixed(width:200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`