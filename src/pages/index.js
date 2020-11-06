import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//Imports Netlify Identity script into HTML of site
//Must be called from React life-cycle function
//(Will not work if called at GatsbyJS build-time due to 'document' not
//being defined)
function initNetlifyIdentity() {
  console.log("initNetlifyIdenity called.")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true;

  document.body.appendChild(script);
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity;

  if(netlifyIdentity)
    netlifyIdentity.open();
  else
    console.log('netlifyIdentity not defined')
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity();
  }
  render() {
    return(<div></div>)
  }
}

const IndexPage = () => {
  return(
    <Layout>
      <NetlifyIdentity />
      <SEO title="Home" />
      <h1>Hi people</h1>
      <h2 onClick={() => { openNetlifyModal() }}>Login</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
