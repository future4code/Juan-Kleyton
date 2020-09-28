import React from 'react';
import styled from 'styled-components';

const InputElement = styled.input`
    width: 100%;
    height: 30%;
    border: 1px solid
    border-radius: 5px;
`

const Input = (props) => {
    return (
        <InputElement type={props.type} value={props.value} pattern={props.pattern} min={props.min} onChange={props.onChange} required={props.required} />
    )
}

export default Input;