import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from "styled-components"

const Container = styled.div`
    margin: 10px;
    background-color: gray;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: raw;
    align-items: center;
`

const ProductTitle = styled.h1`
    flex: 1;
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    text-align: center;s
`

const Info = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
`

const Product = ( {product} ) => {
  return (
    <Container>
        <ProductTitle>Product ID: {product.code}</ProductTitle>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product