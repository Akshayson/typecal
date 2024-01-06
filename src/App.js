

import { useState } from 'react';
import './App.css';
import './App2.css';
import NavBar from './module/NavBar/NavBar';
import { Button } from 'react-bootstrap';



function App() {
  const [loginUser, setLoginUser] = useState('user')

const changeUser =() => {
  const newUser = loginUser === 'user'? 'admin ':'user'; 

console.log('loginUser',loginUser)
console.log('newUser',newUser)

setLoginUser(newUser);
}
 
 return (
  <div>
  <NavBar />

  <div>
    <Button onClick={()=>changeUser()}> loginUser </Button>

  <h1>current login user is {loginUser}</h1>
  </div>
  </div>
 )

}

export default App;
