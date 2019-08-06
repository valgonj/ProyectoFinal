import React, { Component } from 'react';
import Button from '../../../Common/Btns/Buttons';
import Campo from '../../../Common/Campo/Campo';
import { naxios } from '../../../../Utilities';

export default class NuevoAdd extends Component{
    constructor(){
      super();

    //Estado Inicial DEF
      this.state = {
          descripcion: '',
          error:false
      };
      //Autobinding
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onSaveBtnClick = this.onSaveBtnClick.bind(this);
    }

    onChangeHandler(e){
        const {name, value} = e.target;
        this.setState({...this.state, [name]:value});
        //console.log({name, value});
    }

    onSaveBtnClick(e){
        //console.log(this.state);
        const {descripcion} = this.state;
        naxios.post('/api/things', { descripcion})
        .then(({data})=>{
          console.log(data);
          this.props.history.push("/post");
        })
        .catch((error)=>{
          console.log(error);
          this.setState({error:"Error no se pudo Subir el archivo"})
        })
    }

    render(){
      return (
          <section>
              <h1>Subir Nueva Partitura</h1>
              <section className="main fix640">
                  <Campo caption="Descripción" value={this.state.descripcion} name="descripcion" onChange={this.onChangeHandler}/>
                  
                  { (this.state.error && true)? (<div className="error">{this.state.error}</div>):null}
                  <section className="action">
                      <Button caption="Agregar Nuevo" onClick={this.onSiginBtnClick}/>
                      <Button caption="Cancelar" onClick={(e)=>{this.props.history.push('/post')}}/>
                  </section>
              </section>
          </section>
      );
  }
}