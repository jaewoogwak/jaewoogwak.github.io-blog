import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  :hover {
    opacity: 0.5;
  }
`
const InstaImg = styled.img`
  width: 26px;
`
const InstaIcon = () => {
  const goInstaProfile = () => {
    window.open("https://www.instagram.com/jaewoogwak/")
  }
  return (
    <Wrapper onClick={goInstaProfile}>
      <InstaImg src="../images/black-instagram-icon.png" alt="insta" />
    </Wrapper>
  )
}

export default InstaIcon
