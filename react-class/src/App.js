

// import React from 'react'
// import Home from './Component/Home'
import{ useState } from 'react'
// import { Component } from 'react';
// import Hello from './Component/Hello'
// function App() {

//   let age = 23
//   let name = 'jb'
//   let names = ['fm', 'jb', 'joy']
//   return (
//     <div className="App">
//       Rendering App.j
//       <Home name = {name} age = {age} names = {names}/>
//       </div>
//   );
// }

function App() {


const [name, setName] = useState('godbless')
const [age, setAge] = useState(40  )

const update = ()=> {
  setName('freeman')
 setAge(50)
}
return (
  <div className="App">
        <h1>{name} is {age} years old</h1>
        <button onClick={update}></button>
    </div>
);
}

export default App;