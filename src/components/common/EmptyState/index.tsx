import React from 'react'
import styled from 'styled-components'

interface IProps {
  state?: 'empty' | 'loading'
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EmptyState: React.FC<IProps> = ({ state }) => {
  return (
    <Section>
      <h4>{state === 'empty' ? 'No Data' : 'Loading...'}</h4>
    </Section>
  )
}

EmptyState.defaultProps = {
  state: 'empty'
}

export default EmptyState
