import React, { useState } from 'react'

export const useApp = () => {

    const [currentActive, setCurrentActive] = useState<number>(1);

    const onMoveToLeft = () => {

        if (currentActive === 1 ) setCurrentActive(4);

        else setCurrentActive( currentActive - 1 );


    }

    const onMoveToRight = () => {
        
        if (currentActive === 4 ) setCurrentActive(1);

        else setCurrentActive( currentActive + 1 );

    }

    return {
        currentActive,
        onMoveToLeft,
        onMoveToRight
    }
}
