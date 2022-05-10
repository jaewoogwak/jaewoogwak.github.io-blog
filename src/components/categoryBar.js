import { Link } from "gatsby"
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

const CategoryBar = () => {
  return (
    <Wrapper>
      <Category text="React" />
      <Category text="Diary" />
      <Category text="test" />
    </Wrapper>
  )
}

export default CategoryBar
