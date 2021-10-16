import React from "react";
import './App.css';

export default class Test extends React.Component{
    render(){
        return(
            <><div className="Bouton">{this.props.text}</div>
            <div className="Rectangle">{this.props.text}</div></>
        )     
    }
}