import React from 'react';
import '../styles/FormInput.css'

function FormInput(props) {
    
    return (  
        <li className="input-field">
                <label htmlFor={props.id}>{props.name}</label>
                <input 
                    type={props.type} 
                    id={props.id} 
                    value={props.value}
                    onChange={props.function}
                    placeholder={props.placeholder}
                /> 
        </li>
    );
}

export default FormInput;