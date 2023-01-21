import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

const Layout = styled.section`
  width: 100vw;
  height: 100%;
  /* overflow-x: hidden; */
  min-height: 100vh;
`

const MainContent = styled.section`
  min-height: 70vh;
  color: #8c7b72;
  font-size: 16px;
  font-weight: 400;
  padding: 20px;
`

interface IProps {
  children: React.ReactNode
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Layout>
  )
}

export default MainLayout
