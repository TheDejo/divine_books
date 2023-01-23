import React from 'react'
import constant from './constants'
import styled from 'styled-components'

const { SCREEN_TEXT } = constant

const HERO = styled.section`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
  }
`

const HomeSection = () => {
  return (
    <HERO>
      <h1>{SCREEN_TEXT.welcome}</h1>
    </HERO>
  )
}

export default HomeSection
