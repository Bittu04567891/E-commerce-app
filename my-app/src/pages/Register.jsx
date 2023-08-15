
import styled  from "styled-components"

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80") top no-repeat;
    
`
const Wrapper=styled.div`
    
`
const Form=styled.form`
    
`
const Title=styled.h1`
    
`
const Input=styled.input`
    
`
const Agreement=styled.span`
    
`
const Button=styled.button`
    
`

const Register = () => {
  return (
    <Container>
       <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="first name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement>
                By creating an account ,I consent to the processing of my personal data in 
                accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
        </Wrapper> 
    </Container>
  )
}

export default Register