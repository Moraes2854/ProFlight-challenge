import { FC } from 'react'

import './ProFlightIcon.css';

interface ProFlightIconProps {
  isActive?:boolean;
}


export const ProFlightIcon:FC<ProFlightIconProps> = ({ isActive = false }) => {
  

  return (
    <div className={`${(isActive) ? 'active' : 'inactive'} background`}>
      <i className='icon'></i>
    </div>
  )
}
