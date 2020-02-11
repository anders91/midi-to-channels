import React from 'react';
import './App.css';

function App() {

function kopplaTillNode() {
  fetch("http://192.168.1.104:4000/", {
    method: 'POST',
    body: JSON.stringify({
      text: "här kommer post, vi testar igen!!!"
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response)=>{
    return response.text()
  })
  .then((myResponse)=>{
    console.log(myResponse)
  })
}

  return (
    <div>
      <h1>Hello World!!!</h1>
      <button onClick={()=>kopplaTillNode()}>koppla till node</button>
    </div>
  )
}

export default App;
