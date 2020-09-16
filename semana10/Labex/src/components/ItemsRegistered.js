import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    width: 90%;
    height: 90%;
    overflow: scroll;
`

const ItemsRegistered = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default ItemsRegistered;