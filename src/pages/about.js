import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me.</h1>
            <p>I use simple ingredients: pure vanilla, premium quality chocolate and creamy butter to create delicate treats.  </p>
            <p><Link to="/contact">Ready to place your order?</Link></p>
        </Layout>
    )
}
export default About