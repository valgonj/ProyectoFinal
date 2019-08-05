import React, {Component} from 'react';
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
        console.log(this.state);
    }

    render(){
        return (
            <section>
                <h1>Iniciar Sesión</h1>
                <section className="main fix640">
                    <Campo caption="Correo Electrónico" value={this.state.email} name="email" onChange={this.onChangeHandler}/>
                    <Campo caption="Contraseña" type="Password" value={this.state.password} name="password" onChange={this.onChangeHandler}/>
                    <section className="action">
                        <Button caption="Iniciar Sesión" onClick={this.onSiginBtnClick} />
                        <Button caption="Crear Cuenta Nueva" />
                    </section>
                </section>
            </section>
        );
    }
}