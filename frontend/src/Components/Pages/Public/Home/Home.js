import React, {Component} from 'react';
import Button from '../../../Common/Btns/Buttons';
import './Home.css';

export default class Home extends Component{
  render() {
    return (
        <div className="home">
            <h1>Network VaGo</h1>
            <Button caption="Acceder" onClick={(e)=>{this.props.history.push('/Principal')}}/>
            <div>&nbsp;</div>
        </div>
    );
  }

}
