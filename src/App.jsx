// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [Color, setColor] = useState("");
  const [Change, setChange] = useState();
  
  return (
    <div className="App">
      <img src='./logo.png' alt='logo'></img>
      <p>Flavist helps you check colours with either colour names, HEX or RGB codes</p>
      <div className='colorbck' style={{ boxShadow: `5px 10px 30px 5px black`, backgroundColor: `${Color}`}}></div>
      <input type="text" placeholder = "Enter colour name, HEX code or RGB code" onChange={(e) => setChange(e.target.value)} />
      <button className='changeBtn' onClick={() => setColor(Change)}>Show Colour</button>
      
    </div>
  );
}

export default App;
