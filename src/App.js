import logo from './logo.png';
import user from './images.png';
import './App.css';
import React from 'react';

function App() {

  let [welcome, setWelcome] = React.useState('')
  let [version, setVersion] = React.useState('')

   
    fetch("https://node-red-nxdup.mybluemix.net/visitor", {
      "method": "POST"
    })
      .then(response => response.json())
      .then(response => {
        setWelcome(response.data.welcome);
        setVersion(response.data.version)
      })
      .catch(err => {
        console.log(err);
      });


  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <section className="App-content">
        <img src={user} title="Usuario"/>
        <h3>{welcome}</h3>
        <button className="App-button">Continuar..</button>
      </section>
      <footer className="App-footer">
        <h4>Version {version}</h4>
      </footer>
    </div>
  );
}

export default App;
