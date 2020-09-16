import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    align-items: center;
    width: 100%;
    height: 20%;
`

const ListItem = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default ListItem;