import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Don't worry it's not the end of the road.</p>
    <Link
    to={'/'}
    >Go Home</Link>
  </Layout>
)

export default NotFoundPage
