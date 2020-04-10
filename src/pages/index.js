import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout'
export default function Index() {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>
        This is an example site integrating Netlify’s form handling with Gatsby. You can{' '}
        <a href="https://github.com/sw-yx/gatsby-netlify-form-example-v2">view source here</a>.
      </p>
      <ul>
        <li>
          <Link to="/recaptcha/">Form with reCAPTCHA 2</Link>
        </li>
      </ul>
    </Layout>
  )
}
