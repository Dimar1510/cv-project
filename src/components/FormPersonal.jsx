import React from 'react';

function FormPersonal(props) {

    return (  
        <div className='form-section'>
            <h2>Personal Details</h2>
            <ul className='input-list'>
                <li className="input-field">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        value={props.personal.name}
                        onChange={e => props.onChange({...props.personal, name: e.target.value})}
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={props.personal.email}
                        onChange={e => props.onChange({...props.personal, email: e.target.value})}
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="phone">Phone number</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        value={props.personal.phone}
                        onChange={e => props.onChange({...props.personal, phone: e.target.value})}
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="adress">Address</label>
                    <input 
                        type="text" 
                        name="adress"
                        id="adress" 
                        value={props.personal.address}
                        onChange={e => props.onChange({...props.personal, address: e.target.value})}
                    />
                </li>
            </ul>
        </div>
    );
}

export default FormPersonal;