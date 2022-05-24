/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        
      </div>

    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage:{
    "input":{
      border:"6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground"
    },
    "textarea": {
      border:"6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground"
    }
  }
}