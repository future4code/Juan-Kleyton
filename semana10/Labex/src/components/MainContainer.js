import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`

const MainContainer = (props) => {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    )
}

export default MainContainer;