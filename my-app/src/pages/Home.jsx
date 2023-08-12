import React from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
height:60px;
`
const Wrapper=styled.div`
  padding:10px 20px;
`

const Home = () => {
  return (
    <Container>
        <Wrapper>
            navbar
        </Wrapper>
    </Container>
  )
}

export default Home
