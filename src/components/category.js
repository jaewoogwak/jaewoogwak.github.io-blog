import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CategoryBtn = styled.span`
  display: flex;
  border-radius: 20px;
  height: 40px;
  box-shadow: 3px 3px 3px darkgray;
  font-size: 16px;
  text-align: center;
  align-items: center;
  background-color: white;
  :hover {
    border: 2px solid black;
  }
`
const Text = styled.span`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  font-weight: 700;
`

const Category = ({ text }) => {
  return (
    <CategoryBtn>
      <Text>{text}</Text>
    </CategoryBtn>
  )
}

export default Category
