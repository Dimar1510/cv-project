import React, { useState } from 'react';
import FormInput from './FormInput';
import { mdilChevronRight, mdilPlus } from '@mdi/light-js';
import { mdiAccountOutline } from '@mdi/js';
import Icon from '@mdi/react';

function FormPersonal(props) {
    
    const [active, setActive] = useState(false)

    const inputs = [
        {
            name: 'Full Name',
            id: 'name',
            type: 'text',
            placeholder: 'Enter your full name',
            value: props.personal.name,
            function: e => props.onChange({...props.personal, name: e.target.value}) 
        }, 
        {
            name: 'Speciality',
            id: 'speciality',
            type: 'text',
            placeholder: 'Enter your speciality',
            value: props.personal.speciality,
            function: e => props.onChange({...props.personal, speciality: e.target.value}) 
        }, 
        {
            name: 'Location',
            id: 'address',
            type: 'text',
            placeholder: 'City, country/region',
            value: props.personal.address,
            function: e => props.onChange({...props.personal, address: e.target.value}) 
        }, 
        {
            name: 'E-mail',
            id: 'email',
            type: 'email',
            placeholder: 'Enter your e-mail',
            value: props.personal.email,
            function: e => props.onChange({...props.personal, email: e.target.value}) 
        }, 
        {
            name: 'Phone Number',
            id: 'phone',
            type: 'tel',
            placeholder: 'Enter your phone number',
            value: props.personal.phone,
            function: e => props.onChange({...props.personal, phone: e.target.value}) 
        },

    ]
    
    const handleToggle = () => {
        setActive(!active)
    }

    return (  
        <div className='form-section form-personal'>
            <button className='btn-personal' onClick={handleToggle}>
                <h2>
                    <span><Icon path={mdiAccountOutline} size={1} />Personal Details </span>
                    <Icon path={mdilChevronRight} size={1} />
                </h2>
            </button>
            <ul className={active? 'input-list active' : 'input-list'}>
                {inputs.map(item => {
                    return <FormInput {...item} key = {item.id}/>
                })}
                <li className="input-field">
                <label htmlFor='about'>About</label>
                <textarea 
                    id='about'
                    placeholder='Tell a little about yourself'
                    value={props.personal.about}
                    onChange={e => props.onChange({...props.personal, about: e.target.value})}
                /> 
                </li>
                {props.personal.links.map((link, index) => {
                    return (
                    <li className="input-field" key={index}>
                        <label htmlFor={`link-${index}`} >Link {index + 1}</label>
                        <input 
                        type='text' 
                        placeholder='Additional link you might want to add'
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