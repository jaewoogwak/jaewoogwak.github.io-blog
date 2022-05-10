import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import CategoryBar from "../components/categorybar"
const Wrapper = styled.li`
  border-top: 0.5px solid gray;
  padding-bottom: 1.5rem;
`
const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  console.log("data2", data)
  const siteTitle = data.site.siteMetadata?.title || `Title`
  console.log("data", data)
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <CategoryBar data={data} />
      <ol style={{ listStyle: `none` }}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          const { date } = node.frontmatter
          const { description } = node.frontmatter
          return (
            <Wrapper key={slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    {" "}
                    <Link to={slug}>
                      {" "}
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </Wrapper>
          )
        })}
      </ol>

      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            category
          }
        }
      }
    }
  }
`
