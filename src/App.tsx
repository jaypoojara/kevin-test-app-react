import React, {
  useLayoutEffect,
  useState
} from 'react';
import {
  MainComponentHOC
} from './components';
import './App.css';

let divHeight: string = '40';
(window as any).setDivHeight = (height: string) => {
  divHeight = height.replace(/\D/g,'');
  const startEvent = new Event('divHeightChange');
  (window as any).dispatchEvent(startEvent);
};

function App() {
  const [divHeightState, setDivHeightState] = useState(divHeight);

  function updateDivHeightState() {
    setDivHeightState(divHeight);
  }

  useLayoutEffect(() => {
    window.addEventListener('divHeightChange', updateDivHeightState);
    return () => window.removeEventListener('divHeightChange', updateDivHeightState);
  }, []);
  return (
    <div className='App'>
      <MainComponentHOC divHeight={divHeightState}/>
    </div>
  );
}

export default App;
