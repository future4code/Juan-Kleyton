import React from 'react';

import styled from 'styled-components';

const SelectElement = styled.select`
    width: 90%;
    height: 40%;
    border: 1px solid 
    border-radius: 5px;
`

const Select = (props) => {
    return (
        <SelectElement onChange={props.onChange}>
            {props.children}
        </SelectElement>
    )
}

export default Select;