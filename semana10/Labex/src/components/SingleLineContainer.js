import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: center;
    width: 100%;
    height: 10%;
`

const SingleLineContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default SingleLineContainer;