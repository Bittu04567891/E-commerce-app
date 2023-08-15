import styled  from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, CurrencyRupee, Remove } from "@mui/icons-material"

const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 50px;
    display: flex;

`
const ImgContainer=styled.div`
    flex: 1;
`
const Image=styled.img`
    width: 40%;
    height: 80vh;
    margin-left: 50px;
   
    /* mix-blend-mode: darken; */
   
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title=styled.h1`
    font-weight: 200;
`
const Desc=styled.p`
    margin: 20px 0px;
`
const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer=styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter=styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize=styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption=styled.option`
    
`
const AddContainer=styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button=styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
   <Navbar/>
   <Announcement/>
   <Wrapper>
    <ImgContainer>
    <Image src="https://m.media-amazon.com/images/I/81peIYei9RL._AC_UL600_FMwebp_QL65_.jpg"/>
    </ImgContainer>
    <InfoContainer>
        <Title>Women's Blue Solid Regular Fit Full Length Denim Dungaree</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo dolores doloribus deserunt qui, accusantium natus aliquam molestiae exercitationem minima! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam tempora unde consequuntur aperiam, voluptatibus, corrupti quidem commodi iure velit suscipit similique necessitatibus dolorem dolorum illo odio laboriosam. Reprehenderit qui non beatae commodi fuga at ipsam obcaecati, tempora ratione quae esse voluptatibus provident sunt necessitatibus rerum id quisquam, eaque in nulla.</Desc>
        <Price><CurrencyRupee style={{ fontSize: "15px" }}/>500</Price>
        <FilterContainer>
           <Filter>
            <FilterTitle>Colour</FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="darkblue"/>
            <FilterColor color="gray"/>
            </Filter> 
            <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>XXL</FilterSizeOption>
                   
                </FilterSize>
            </Filter>
        </FilterContainer> 
        <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
        </AddContainer>

    </InfoContainer>
   </Wrapper>
   <Newsletter/>
   <Footer/>
    </Container>
  )
}

export default Product