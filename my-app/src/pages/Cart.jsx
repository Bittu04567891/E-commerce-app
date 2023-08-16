import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from"../components/Navbar"
import { Add, CurrencyRupee, Remove } from "@mui/icons-material"
const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 20px;
`
const Title=styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type==="filled"&&"none"};
    background-color:${props=>props.type==="filled"?"black":"transparent"};
    color:${props=>props.type==="filled"&&"white"};
`

const TopTexts=styled.div`
    
`
const TopText=styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
`
const Info=styled.div`
    flex: 3;
`
const Summary=styled.div`
    flex: 1;
   
`
const Product=styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
`
const Image=styled.img`
    width: 200px;
`
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName=styled.span`
    
`
const ProductId=styled.span`
    
`
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${props=>props.color};
`
const ProductSize=styled.span`
    
`
const PriceDetail=styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://m.media-amazon.com/images/I/71yjCh9hO8L._AC_UL600_FMwebp_QL65_.jpg" />
                            <Details>
                                <ProductName><b>Product:</b>PUMA T-shirt</ProductName>
                                <ProductId><b>ID:</b>39847388767</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>37</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                              <ProductPrice><CurrencyRupee style={{ fontSize: "20px" }} />449</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://m.media-amazon.com/images/I/616+1OUqZBS._UY500_.jpg" />
                            <Details>
                                <ProductName><b>Product:</b>Mens Athletic Trail Running Shoe</ProductName>
                                <ProductId><b>ID:</b>47388767</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                              <ProductPrice><CurrencyRupee style={{ fontSize: "20px" }} />1219</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemText><CurrencyRupee style={{ fontSize: "20px" }}/>700</SummaryItemText>
                    </SummaryItem>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart