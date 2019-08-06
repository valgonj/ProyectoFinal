import React, { Component } from 'react';
import Button from '../../../Common/Btns/Buttons';
import Campo from '../../../Common/Campo/Campo';
import { naxios } from '../../../../Utilities';

export default class Signin extends Component{
    constructor(){
      super();

    //Estado Inicial DEF
      this.state = {
          email:'',
          password:'',
          error:false
      };
      //Autobinding
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onSiginBtnClick = this.onSiginBtnClick.bind(this);
    }

    onChangeHandler(e){
        const {name, value} = e.target;
        this.setState({...this.state, [name]:value});
        //console.log({name, value});
    }

    onSiginBtnClick(e){
        console.log(this.state);
        const {email, password} = this.state;
        naxios.post('/api/security/Registrarte', { email, password })
        .then(({data})=>{
          console.log(data);
          this.props.history.push("/login");
        })
        .catch((error)=>{
          console.log(error);
          this.setState({error:"Error al Crear Cuenta"})
        })
    }

    render(){
      return (
          <section>
              <h1>Registrarse</h1>
              <section className="main fix640">
                  <Campo caption="Correo Electrónico" value={this.state.email} name="email" onChange={this.onChangeHandler}/>
                  <Campo caption="Contraseña" type="Password" value={this.state.password} name="password" onChange={this.onChangeHandler}/>
                  { (this.state.error && true)? (<div className="error">{this.state.error}</div>):null}
                  <section className="action">
                      <Button caption="Crear Cuenta" onClick={this.onSiginBtnClick}/>
                      <Button caption="Identificarse" onClick={(e)=>{this.props.history.push('/Login')}}/>
                  </section>
              </section>
          </section>
      );
  }
}