import { Link, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Category from "./category"

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
  height: 56px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #f4f7f8;
`
const CategoryBar = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  const tmp = nodes?.map(item => {
    console.log("category", item.frontmatter.category)
    const { category } = item.frontmatter
    return category
  })
  const categoryList = Array.from(new Set(tmp))
  console.log(categoryList)
  console.log("Data's category list in CategoryBar", categoryList)
  return (
    <Wrapper>
      {/* {categoryList.map((category, idx) => {
        return (
          <Link
            key={idx}
            to={`/tags/${category.toLowerCase()}`}
            style={{ textDecorationLine: "none" }}
          >
            <Category text={category} />
          </Link>
        )
      })} */}
      <Link to="/tags/react" style={{ textDecorationLine: "none" }}>
        <Category text="React" />
      </Link>
      <Link to="/tags/diary" style={{ textDecorationLine: "none" }}>
        <Category text="Diary" />
      </Link>
      <Link to="/" style={{ textDecorationLine: "none" }}>
        <Category text="All posts" />
      </Link>
    </Wrapper>
  )
}

export default CategoryBar

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
