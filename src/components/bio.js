import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import IconBar from "./IconBar"
// test
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <Wrapper className="bio" style={{ marginBottom: "50px" }}>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.png"
        width={60}
        height={60}
        quality={95}
        alt="Profile picture"
      />
      <Box>
        <div>
          {author?.name && (
            <div>
              {author?.summary || null}
              {` `}
            </div>
          )}
        </div>
        <FlexBox>
          <IconBar />
          <Link to="/posts">All posts</Link>
        </FlexBox>
      </Box>
    </Wrapper>
  )
}

export default Bio
