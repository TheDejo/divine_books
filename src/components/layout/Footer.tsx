import React from 'react'
import styled from 'styled-components'
import Logo from '@components/common/Logo'
import configConstants from '@config/constants'

const { COMPANY_LINKS, COMPANY_SOCIALS } = configConstants

const FooterContainer = styled.footer`
  min-height: 20vh;
  padding: 20px;
  color: #fff;
  background-color: #d0c4b8;

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  h4 {
    margin: 0;
  }
`

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }
`

const FooterLinks = styled.section`
  display: flex;
  gap: 20px;
`

const Links = styled.li`
  font-size: 14px;
  font-weight: 500;
`

const ButtonsContainer = styled.span`
  border: 2px solid #fff;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
`

const FooterButtons = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const SocialIconContainer = styled.div`
  display: flex;
  gap: 10px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Logo type='footer' />
      <Wrapper>
        <FooterLinks>
          {COMPANY_LINKS.map(({ links, name }) => (
            <ul key={name}>
              <li>
                <h4>{name}</h4>
              </li>
              {links.map(({ link, name }) => (
                <Links key={name}>
                  <a href={link}>{name}</a>
                </Links>
              ))}
            </ul>
          ))}
        </FooterLinks>

        <FooterButtons>
          <h4>admin@buuks.uk</h4>
          <SocialIconContainer>
            {COMPANY_SOCIALS.map(({ link, name }) => (
              <ButtonsContainer key={name}>
                <a href={link}>{name}</a>
              </ButtonsContainer>
            ))}
          </SocialIconContainer>
        </FooterButtons>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer
