import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    background-color: 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 90%;
    border-radius: 10px;
    color: 

    @media (min-width: 320px) and (max-width: 420px) {
        width: 90%;
        font-size: 0.8em;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 80%;
        font-size: 1.2em;
    }
`

const ContentContainer = (props) => {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    )
}

export default ContentContainer;