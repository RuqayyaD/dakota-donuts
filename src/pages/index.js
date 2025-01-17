import React from "react"

import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello</h1>
      <h2>I am a pastry chef in Bolton.</h2>
      <p>Need some pastries? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}
export default IndexPage