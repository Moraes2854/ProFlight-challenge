import { FC } from 'react';

import './Arrow.css';

interface LeftArrowProps { 
  onClick:()=>void;
}

export const LeftArrow:FC<LeftArrowProps> = ({ onClick }) => {
  return (
    <div className='arrow-background' onClick={onClick}>
        <div className="arrow">
          {'<='}
        </div>
    </div>
  )
}
