
import styled  from "styled-components"

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
      rgba(255,255,255,0.3),
      rgba(255,255,255,0.3)
    ) ,
    url("https://images.unsplash.com/photo-1501349800519-48093d60bde0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") top no-repeat;
    /* background-size: cover; */
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper=styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`
const Form=styled.form`
    display: flex;
    flex-direction: column;
    
`
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link=styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
       <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
         <Input placeholder="username"/>
         <Input placeholder="password"/>
        <Button>LOGIN</Button>
        <Link>DO NOT REMEMBER THE PASSWORD? </Link>
        <Link>CREATE A NEW ACCOUNT </Link>
        </Form>
        </Wrapper> 
    </Container>
  )
}

export default Login