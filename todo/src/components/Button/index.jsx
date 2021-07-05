import React from 'react';
import "./styles.css";
const Button = (props) => {
    return <button className="component-button" 
    style={{backgroundColor: props.color}}>{props.children}</button>
}

export default Button;