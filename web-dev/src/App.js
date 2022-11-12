import { useEffect, useState } from 'react';
import Form from './components/Form'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  const [connectionState, setConnectionState] = useState({
    username:'cas',
    password:'123',
    token:'sd',
  });

  // useEffect(async()=>{
  //   await fetch()
  // },[]);

  function handleSubmit(data){
    
  }
  
  return (
    <div className='AppRoot'>
      <Header connectionState={connectionState}/>
      <div className="AppBody">
        {
          !connectionState.username || !connectionState.token ?
          <Form onSubmit={(data) => handleSubmit(data)}/>
          :
          <Dashboard/>
        }
      </div>
    </div>
  );
}

export default App;
