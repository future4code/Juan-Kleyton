import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    height: 20%;
`

const InputContainer = (props) => {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    )
}

export default InputContainer;