import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import GithubIcon from "./githubIcon"
import MailIcon from "./mailIcon"
import InstaIcon from "./instaIcon"
import styled from "styled-components"

const IconWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.5rem;
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
    <div className="bio">
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
      <div>
        {author?.name && (
          <div>
            {author?.summary || null}
            {` `}
          </div>
        )}

        <IconWrapper>
          <GithubIcon />
          <MailIcon />
        </IconWrapper>
      </div>
    </div>
  )
}

export default Bio
