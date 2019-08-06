import React, {Component} from 'react';
import { naxios } from '../../../../Utilities';
import { Redirect } from 'react-router-dom';

import Button from '../../../Common/Btns/Buttons';
import Campo from '../../../Common/Campo/Campo';

export default class Login extends Component{
    constructor(){
        super();

    //Estado Inicial DEF
        this.state = {
            email:'',
            password:'',
            Redirect:false,
            error:null
        }
        //autobinding
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSiginBtnClick = this.onSiginBtnClick.bind(this);
    }

    onChangeHandler(e){
        const {name, value} = e.target;
        this.setState({...this.state, [name]:value});
        //console.log({name, value});
    }

    onSiginBtnClick(e){
        //console.log(this.state);
        naxios.post('/api/security/login', this.state).then( ( {data , status})=>{
        this.props.setAuth(data.token, data.user);
        this.setState({redirect:true});
        }
      )
      .catch( (err)=> {
          console.log(err)
          this.setState({"error":"Datos Incorrectos"})
        }
      )
    ;
    }

    render(){
        //console.log(this.props);
        if(this.state.redirect){
        return (
        <Redirect to={(this.props.location.state) ? this.props.location.state.from.pathname : '/'}/>
        );
    }  
        return (
            <section>
                <h1>Iniciar Sesión</h1>
                <section className="main fix640">
                    <Campo caption="Correo Electrónico" value={this.state.email} name="email" onChange={this.onChangeHandler}/>
                    <Campo caption="Contraseña" type="Password" value={this.state.password} name="password" onChange={this.onChangeHandler}/>
                    { (this.state.error && true)? (<div className="error">{this.state.error}</div>):null}
                    <section className="action">
                        <Button caption="Iniciar Sesión" onClick={this.onSiginBtnClick}/>
                        <Button caption="Crear Cuenta" onClick={(e)=>{this.props.history.push('/registrarse')}}/>
                    </section>
                </section>
            </section>
        );
    }
}