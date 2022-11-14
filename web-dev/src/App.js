import { useEffect, useState } from 'react';
import Form from './components/Form'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  const [connectionState, setConnectionState] = useState({
    username:'Lucas',
    password:'123',
    token:'',
  });


  function handleSubmit(data){
    setConnectionState({connectionState,...data})
  }
  function handleLogout(){
    setConnectionState({username:'',password:'',token:''})
  }
  
  console.log(connectionState)
  return (
    <div className='AppRoot'>
      <Header connectionState={connectionState} onLogout={handleLogout}/>
      <div className="AppBody">
        {
          !connectionState.username && !connectionState.password ?
          <Form onSubmit={(data) => handleSubmit(data)}/>
          :
          <Dashboard connectionState={connectionState}/>
        }
      </div>
    </div>
  );
}

export default App;
