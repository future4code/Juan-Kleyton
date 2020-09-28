import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.section`
    display: grid;
    grid-template-rows: 40% 50%;
    justify-items: center;
    width: 90%;
    height: 80%;
`

const Details = (props) => {
    return (
        <DetailsContainer className={props.className}>
            {props.children}
        </DetailsContainer>
    )
}

export default Details;