import './styles/styles.scss';
import Main from './components/Main';
import Header from './components/Header';

import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import { userContext } from './context/userContext'

function App() {

  const [user,setUser] = useState("");

  // login
  const login = (x) => {
    setUser(x);
  }

  // logout
  const logout = () => {
    setUser("");
  }

  // Pasamos el objeto del context provider a los componentes que lo necesiten
  const userData = {
    user,
    login,
    logout
  }


  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={userData}>
          <Header/>
          <Main/>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
