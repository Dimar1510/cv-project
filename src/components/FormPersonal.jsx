import React from 'react';
import FormInput from './FormInput';
import { mdilPlus } from '@mdi/light-js';
import Icon from '@mdi/react';

function FormPersonal(props) {
    
    const inputs = [
        {
            name: 'Full Name',
            id: 'name',
            type: 'text',
            value: props.personal.name,
            function: e => props.onChange({...props.personal, name: e.target.value}) 
        }, 
        {
            name: 'Speciality',
            id: 'speciality',
            type: 'text',
            value: props.personal.speciality,
            function: e => props.onChange({...props.personal, speciality: e.target.value}) 
        }, 
        {
            name: 'Location',
            id: 'address',
            type: 'text',
            value: props.personal.address,
            function: e => props.onChange({...props.personal, address: e.target.value}) 
        }, 
        {
            name: 'E-mail',
            id: 'email',
            type: 'email',
            value: props.personal.email,
            function: e => props.onChange({...props.personal, email: e.target.value}) 
        }, 
        {
            name: 'Phone Number',
            id: 'phone',
            type: 'tel',
            value: props.personal.phone,
            function: e => props.onChange({...props.personal, phone: e.target.value}) 
        }, 
    ]
    

    return (  
        <div className='form-section'>
            <h2>Personal Details</h2>
            <ul className='input-list'>
                {inputs.map(item => {
                    return <FormInput {...item} key = {item.id}/>
                })}
                {props.personal.links.map((link, index) => {
                    return (
                    <li className="input-field" key={index}>
                        <label htmlFor={`link-${index}`} >Link {index + 1}</label>
                        <input 
                        type='text' 
                        id={`link-${index}`} 
                        value={link}
                        onChange={(e) => {
                            const value = e.target.value
                            const newData = {...props.personal}
                            newData.links[index] = value
                            props.onChange(newData)
                        }}
                        
                        />
                        <button 
                            className='btn-delete' 
                            onClick={() => {
                                const newData = {...props.personal}
                                newData.links.splice(index, 1)
                                props.onChange(newData)
                              }}
                            >
                                Remove link
                        </button> 
                    </li>
                    )
                })
                }
                <button className='btn-add'
                    onClick={() => {
                        const newData = {...props.personal}
                        newData.links.push('')
                        props.onChange(newData)
                    }}
                  >
                    <Icon path={mdilPlus} size={1} />
                    <span>Add Link</span>
                </button>
            </ul>
        </div>
    );
}

export default FormPersonal;