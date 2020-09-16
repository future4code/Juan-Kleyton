import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
`

const FormContainer = (props) => {
    return (
        <Container className={props.className} onSubmit={props.onSubmit}>
            {props.children}
        </Container>
    )
}

export default FormContainer;