import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inventory from './components/inventory';
import Purchases from './components/purchase';
import Sales from './components/Sales';

function App() {
  const [currentView, setCurrentView] = useState(<Purchases></Purchases>);

  const printHola = (e) => {
    if(e.target.innerText == "Compras"){
      setCurrentView(<Purchases></Purchases>);
    }
    if(e.target.innerText == "Ventas"){
      setCurrentView(<Sales></Sales>);
    }
  }

  return (
    <>
      <div>
      <h1>INGE-PANZEROTTIS</h1>
        <div>
          <nav>
            <a onClick={printHola}>Compras</a> <br />
            <a onClick={printHola}>Ventas</a> <br />
          </nav>
        </div>


        <Inventory></Inventory>
        {currentView}

        {/* 
        <Purchases></Purchases>
        <Sales></Sales> */}
      </div>
    </>
  )
}

export default App
