import { useState } from 'react';

const useInputValue = (type) => {
    const [ value, setValue ] = useState(type);

    const onChangeValue = (event) => {
        setValue(event.target.value);
    }

    return [value, onChangeValue]
}

export default useInputValue;