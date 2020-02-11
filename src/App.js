import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

const [access, setaccess] = useState(null)

useEffect(() => {
  navigator.requestMIDIAccess({sysex: true})
  .then(function(access) {

    setaccess(access)

     access.onstatechange = function(e) {
       // Print information about the (dis)connected MIDI controller
       console.log(e);
     };
  });
}, [])


if(access) {
  for (var input of access.inputs.values())
      input.onmidimessage = getMIDIMessage;

  function getMIDIMessage(midiMessage) {
    console.log(midiMessage.data[0]);
    kopplaTillNode(midiMessage.data['0'])
  }
}


function kopplaTillNode(data) {
  fetch("http://192.168.1.104:4000/", {
    method: 'POST',
    body: JSON.stringify({data}),
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
      <button onClick={()=>kopplaTillNode("från knappen")}>koppla till node</button>
    </div>
  )
}

export default App;
