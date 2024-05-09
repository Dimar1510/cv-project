import React, { useState } from 'react';
import FormEducationItem from './FormEducationItem';
import '../styles/FormEducationList.css'

function FormEducationList(props) {

    const [active, setActive] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleToggle = () => {
        setActive(!active)
        setEdit(false)
    }

    function handleDelete(id){
        props.setEducations(props.educations.filter(item => item.id !== id))
    }

    function handleEdit(item) {
        setActive(true)
        setEdit(true)
        props.setEducationItem({
            ...item
        })
    }

    return (
        <div className= 'form-list'>
            <h2>Education</h2>
            {props.educations.map(item => {
                return (
                    <div className='form-item-header' key={item.id}>
                        <h3>{item.school}</h3>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                )
            })}
            <FormEducationItem {...props} edit = {edit} active = {active} setActive = {setActive}/>
            {!active 
            && <button onClick={handleToggle}>Add education</button>}
            
        </div>  

    );
}

export default FormEducationList;