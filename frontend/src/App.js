import React from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import { setJWT, setUnAuthHandler, getLocalStorage, setLocalStorage, removeLocalStorage } from './Utilities';
//import { AnimatedSwitch } from 'react-router-transition';

import NavBar from './Components/Common/NavBar/NavBar';
import Home from './Components/Pages/Public/Home/Home';
import Login from './Components/Pages/Public/Login/Login';
import Registrarse from './Components/Pages/Public/Registrarse/Registrarse';
import Post from './Components/Pages/Public/Post/Post';
import NuevoAdd from './Components/Pages/Public/NuevoPost/NuevoAdd';


import Dashboard from  './Components/Pages/Private/Dashboard/Dashboard';

function App() {
  return (
    /*<section className="container">
        <Dashboard />
      </section>*/
    <Router>
      <section className="container">
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Registrarse" component={Registrarse} />
        <Route path="/Principal" component={Dashboard} />
        <Route path="/Post" component={Post} />
        
        
        <NavBar />
      </section>
    </Router>
  );
}

export default App;
