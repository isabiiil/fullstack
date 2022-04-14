import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState("Hello there!");

  const getData = async (url) => {
    const newData = await fetch (url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      }
    })
    .then(res => res.json());
    console.log(newData);
    setData(newData.result);
  }
  return (
    <div className="App">
      <button onClick={() => getData('/end')}>Click me!</button>
      {data}
    </div>
  );
}

export default App;
