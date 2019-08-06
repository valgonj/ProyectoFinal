import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosLogIn, IoIosKey,} from 'react-icons/io';
import { GoHome } from 'react-icons/go';
import './NavBar.css';

const NavItem = ({ to, children, ...rest }) => {
  return (
    <Link  to={to}>{children}</Link>
  );
};

export default ({auth, unSetAuth})=>{
  console.log(auth);

  return(
    <nav>
      <NavItem to="/Login"><IoIosLogIn/>&nbsp;Login</NavItem>
      <NavItem to="/Registrarse"><IoIosKey/>&nbsp;Registrarse</NavItem>
      <NavItem to="/"><GoHome/>&nbsp;Inicio</NavItem>
    </nav>
  )
 /* if(!auth.logged){
    return(
      <nav>
        <NavItem to="/Login"><IoIosLogIn/>&nbsp;Login</NavItem>
        <NavItem to="/Registrarse"><IoIosKey/>&nbsp;SignIn</NavItem>
      </nav>
    )
 /* } else {
    return (
      <nav>
        <NavItem to="/"><IoIosHome/>&nbsp;Home</NavItem>
        <NavItem to="/main"><IoIosToday />&nbsp;Main</NavItem>
        <NavItem to="/backlog"><IoIosList/>&nbsp;BackLog</NavItem>
      </nav>
    )
  }*/
}