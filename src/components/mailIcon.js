import React from "react"
import styled from "styled-components"
const Wrapper = styled.div`
  width: 26px;
  :hover {
    opacity: 0.5;
    background-color: black;
  }
`
const MailIcon = () => {
  return (
    <Wrapper>
      <a href="mailto:jaewoo010207@gmail.com">
        <svg
          width="28px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8"
        >
          <title>Mail icon</title>
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      </a>
    </Wrapper>
  )
}

export default MailIcon
