import { Link, graphql } from "gatsby"
import React, { useEffect, useState } from "react"
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
const CategoryBar = ({ data, tags }) => {
  let tagList = ["javascript", "diary"]
  //tags?.forEach((tag, idx) => localStorage.setItem(idx, tag.toLowerCase()))

  // if (tags) localStorage.setItem("len", tags.length)
  // let list = []

  // for (let i = 0; i < localStorage.getItem("len"); i++) {
  //   list.push(localStorage.getItem(i))
  // }
  // tagList = [].concat(list)

  return (
    <Wrapper>
      {(tags || tagList)
        .map((category, idx) => {
          return (
            <Link
              key={idx + 1}
              to={`/tags/${category?.toLowerCase()}`}
              style={{ textDecorationLine: "none" }}
            >
              <Category text={category} />
            </Link>
          )
        })
        .concat(
          <Link key={0} to="/" style={{ textDecorationLine: "none" }}>
            <Category text="All posts" />
          </Link>
        )}
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
