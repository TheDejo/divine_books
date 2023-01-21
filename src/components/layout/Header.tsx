import React from 'react'
import styled from 'styled-components'
import SearchInput from '@components/common/SearchInput'
import Logo from '@components/common/Logo'

const NavBar = styled.nav`
  padding: 10px 20px;
  background: #fbf8f5;
  position: sticky;
  top: 0;
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  return (
    <NavBar>
      <ContentWrapper>
        <Logo />
        <SearchInput />
      </ContentWrapper>
    </NavBar>
  )
}

export default Header
