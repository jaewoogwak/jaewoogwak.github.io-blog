import React from "react"
import GithubIcon from "./githubIcon"
import MailIcon from "./mailIcon"
import styled from "styled-components"

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-right: 1.5rem;
`

const IconBar = () => {
  return (
    <IconWrapper>
      <GithubIcon />
      <MailIcon />
    </IconWrapper>
  )
}

export default IconBar
