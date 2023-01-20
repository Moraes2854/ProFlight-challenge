import { FC } from 'react';

import './Arrow.css';

interface RightArrowProps { 
  onClick:()=>void;
}

export const RightArrow:FC<RightArrowProps> = ({ onClick }) => {
  return (
    <div className='arrow-background' onClick={onClick}>
        <div className="arrow">
          {'=>'}
        </div>
    </div>
  )
}
