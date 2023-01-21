import React from 'react'
import styled from 'styled-components'
import configConstants from '@config/constants'

const { LOGO } = configConstants

interface IProps {
  type?: 'footer' | 'header'
}

const Logo: React.FC<IProps> = ({ type }) => {
  const LogoHeading = styled.h2`
    color: ${type === 'header' ? '#8c7b72' : '#fff'};
  `
  return <LogoHeading>{LOGO}</LogoHeading>
}

Logo.defaultProps = {
  type: 'header'
}

export default Logo
