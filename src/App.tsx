import './App.css';
import { useState } from 'react';

import { drawDOM, exportPDF } from '@progress/kendo-drawing';

import Hello from '@/components/Hello/Hello';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  const onExport = () => {
    drawDOM(document.querySelector('.App') as HTMLElement, {
      paperSize: 'A4',
    })
      .then((g) => exportPDF(g))
      .then((data) => {
        console.log(data);
        // base 6pdf download
        const downloadLink = document.createElement('a');
        const fileName = 'sample.pdf';

        downloadLink.href = data;
        downloadLink.download = fileName;
        downloadLink.click();
      });
  };

  return (
    <>
      <div className='App'>
        {process.env.VITE_TEST}
        <Hello />
        <div>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <h2>Vite + React</h2>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      </div>

      <button onClick={onExport}>Export PDF</button>
    </>
  );
}

export default App;
