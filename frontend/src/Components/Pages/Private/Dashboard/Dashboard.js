import React,  {Component} from 'react';
//import {paxios, getLocalStorage, setLocalStorage} from '../../../../Utilities';
//import { Link } from 'react-router-dom';

import './Dashboard.css';
//import { MdAdd as Plus } from 'react-icons/md';

//import ThingBox from './ThingBox';
import DatePanel from './DatePanel';
export default class Dashboard extends Component{

    render(){
        return(
            <section>
                <h1>VaGo Comunitario</h1>
                <section className="main cardHolder fix640">
                    <div className="card"> <span className="centrado">Contribucciones genericas</span> <DatePanel/></div>
                    <div className="card">React Native. <DatePanel/></div>
                    <div className="card">Android Studio error 512. <DatePanel/></div>
                    <div className="card">Pantallas con rayas. <DatePanel/></div>
                </section>
            </section>
        );
    }
}