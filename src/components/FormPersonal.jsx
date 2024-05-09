import React from 'react';

function FormPersonal(props) {

    return (  
        <div className='form-personal'>
            <h2>Personal Details</h2>
            <ul>
                <li className="input-field">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        onChange={e => props.onChange({...props.personal, name: e.target.value})}
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={e => props.onChange({...props.personal, email: e.target.value})}
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="phone">Phone number</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        onChange={e => props.onChange({...props.personal, phone: e.target.value})}
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="adress">Address</label>
                    <input 
                        type="text" 
                        name="adress"
                        id="adress" 
                        onChange={e => props.onChange({...props.personal, address: e.target.value})}
                    />
                </li>
            </ul>
        </div>
    );
}

export default FormPersonal;