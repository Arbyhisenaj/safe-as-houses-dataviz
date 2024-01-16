import React from 'react';
import HpiChart from './components/hpiChart';
import SeaLevels from './components/seaLevelsChart';
import './index.css';


function App() {
  return (
    <div className="container mx-auto px-4">
      <p className="text-2xl my-10 font-bold">Safe as houses test</p>
      <div className='flex flex-col gap-10 justify-center'>
        <HpiChart />
        <SeaLevels />
      </div>
    </div>
  );
}

export default App;
