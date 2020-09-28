import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
`

const ContentHeader = (props) => {
    return (
        <Header>
            {props.children}
        </Header>
    )
}

export default ContentHeader;