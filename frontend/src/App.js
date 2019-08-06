import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import { setJWT, setUnAuthHandler, getLocalStorage, setLocalStorage } from './Utilities';
//import { AnimatedSwitch } from 'react-router-transition';

import NavBar from './Components/Common/NavBar/NavBar';
import Home from './Components/Pages/Public/Home/Home';
import Login from './Components/Pages/Public/Login/Login';
import Registrarse from './Components/Pages/Public/Registrarse/Registrarse';
import Post from './Components/Pages/Public/Post/Post';
import NuevoAdd from './Components/Pages/Public/NuevoPost/NuevoAdd';


import Dashboard from  './Components/Pages/Private/Dashboard/Dashboard';

class App extends Component {
  constructor(){
    super();
    // verificar los datos de local storage
    this.state =  {
      "auth":( JSON.parse(getLocalStorage('auth')) ||
      {
        logged: false,
        token: false,
        user: {}
      })
    };
    this.setAuth = this.setAuth.bind(this);
    this.setUnAuth = this.setUnAuth.bind(this);

    setJWT(this.state.auth.token);
    setUnAuthHandler(this.setUnAuth);
  } // constructor


  setUnAuth(error){
    this.setAuth(false,{});
  }

  setAuth(token, user){
    setJWT(token);
    let _auth = {
      logged: token && true,
      token: token,
      user: user
    };
    setLocalStorage('auth', JSON.stringify(_auth));
    this.setState({
      auth: _auth
    });
  }

  render(){
  return (
    <Router>
      <section className="container">
        <Route path="/" exact component={Home} />
        <Route path="/login" render={ (props)=>(<Login {...props} auth={this.state.auth} setAuth={this.setAuth} />) } />
        <Route path="/Registrarse" component={Registrarse} />
        <Route path="/Principal" component={Dashboard} />
        <Route path="/Post" component={Post} />
        
        
        <NavBar />
      </section>
    </Router>
    );
  }
}

export default App;
