import { ProFlightIcon, LeftArrow, RightArrow } from './components';
import { useApp } from './hooks/useApp';

import './App.css'


export const App = () => {

  const { currentActive, onMoveToLeft, onMoveToRight } = useApp();
  
  return (
    <div className="d-flex align-items-center justify-content-center">

      <LeftArrow onClick={onMoveToLeft}/>

        {
          [1,2,3,4].map((value)=>(
            <div className={`ps-4 pe-4`} key={`divIcon${value}`}>
             <ProFlightIcon isActive={ value === currentActive } />
            </div>
          ))
        }

      <RightArrow onClick={onMoveToRight}/>

    </div>
  )
}



