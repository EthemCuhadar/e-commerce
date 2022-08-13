import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Right = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 1;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input/>
                    <SearchIcon />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>LOGO.</Logo>
            </Center>
            <Right>right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar