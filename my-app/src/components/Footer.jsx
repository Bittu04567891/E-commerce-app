import { Facebook, Instagram, LinkedIn, LocalPhone, LocationOn, MailOutline, Twitter } from "@mui/icons-material"
import  styled  from "styled-components"

const Container=styled.div`
    display: flex;

`
const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Logo=styled.h1`
   font-weight: bolder;
    
`
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center=styled.div`
     flex: 1;
     padding: 20px;

`
const Title=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right=styled.div`
     flex: 1;
     padding: 20px;
   

`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment=styled.img`
width:30%;
height: 20%;

`
const Footer = () => {
  return (
    <Container>
     <Left>
     <Logo>PrismCart</Logo>
     <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, possimus! Quibusdam nesciunt itaque assumenda earum modi corrupti vel nobis sunt facere vitae rerum fugit, aperiam perspiciatis eligendi sapiente unde. Labore?</Desc>
     <SocialContainer>
        <SocialIcon color="3B5999">
           <Facebook/> 
        </SocialIcon >
        <SocialIcon color="E4405F">
           <Instagram/> 
        </SocialIcon>
        <SocialIcon color="55ACEE">
        <Twitter/> 
           
        </SocialIcon>
        <SocialIcon color="0e76a8">
        <LinkedIn/> 
        </SocialIcon>
     </SocialContainer>
     </Left>
     <Center>
     <Title>Useful Links</Title>
     <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Kids Wear</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
     </List>
     </Center>
     <Right>
      <Title>Contact</Title>
      <ContactItem><LocationOn style={{marginRight:"10px"}}/>Hostel K,NIT Jamshedpur</ContactItem>
      <ContactItem><LocalPhone style={{marginRight:"10px"}}/> +91 7755937498</ContactItem>
      <ContactItem><MailOutline style={{marginRight:"10px"}}/> prismcart@nitjsr.ac.in</ContactItem>
      <Payment src="data:image/jpeg;base64,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"/>
     </Right>
    </Container>
  )
}

export default Footer