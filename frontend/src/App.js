import React from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';

import Home from './Components/Pages/Public/Home/Home';
import Login from './Components/Pages/Public/Login/Login';
import Registrarse from './Components/Pages/Public/Registrarse/Registrarse';


function App() {
  return (
    <Router>
      <section className="container">
        <Route path="/Login" exact component={Login} />
        <Route path="/Registrarse" component={Registrarse} />
      </section>
    </Router>
  );
}

export default App;
