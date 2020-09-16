import { useLayoutEffect } from 'react';

const useChangeTitle = (title) => {
    useLayoutEffect(() => {
        document.title = `LabeX - ${title}`;
    })
}

export default useChangeTitle;