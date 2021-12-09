import React from "react";
import cardclasses from './Card.module.css';
const Card = props =>{
return <div className= {`${cardclasses.card} ${props.className} `}> {props.children}</div>
}
export default Card;