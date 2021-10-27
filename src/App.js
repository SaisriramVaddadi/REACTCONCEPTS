import './App.css';
import React from 'react';
import ParentComp from './ParentComp';
import Hooks from './Hooks/Hooks';
import JSX from './jsx/JSX';
import Component1 from './Context/Context';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';

function App() {
  return (
    <div className="App">
        {/* <ParentComp/> */}
        {/* <Hooks/> */}
        {/* <JSX/> */}
        <ClickCounter/>
        <HoverCounter/>
    </div>
  );
}

export default App;
