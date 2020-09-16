import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`

const InfoContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default InfoContainer;