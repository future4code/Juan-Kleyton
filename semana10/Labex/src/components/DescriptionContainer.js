import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-rows: 5% 25% 75%;
    align-items: center;
    width: 100%;
    height: 100%;
`

const DescriptionContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default DescriptionContainer;