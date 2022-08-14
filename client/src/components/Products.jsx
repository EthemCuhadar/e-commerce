import styled from "styled-components"

import { useQuery, gql } from "@apollo/client";
import Product from "./Product";

const GET_PRODDUCTS = gql`
  {
    products(limit: 20, index: 30) {
      count
      products {
        id
        code
      }
    }
  }
`

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: teal; 
`

const Products = () => {

    const { loading, error, data } = useQuery(GET_PRODDUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <Container>
            <h1>Products</h1>
            {data.products.products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </Container>
    )
}

export default Products