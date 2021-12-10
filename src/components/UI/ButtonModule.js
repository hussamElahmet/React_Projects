import React from "react";
import buttonclasses from './ButtonModule.css';
const ButtonModule = props => {
    return (<button className={buttonclasses.button} 
        type={props.type ||"button"}
        onClick={props.onClick}
         >{props.children}</button>
        );
}
export default ButtonModule;