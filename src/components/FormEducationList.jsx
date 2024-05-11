import React, { useState } from 'react';
import FormEducationItem from './FormEducationItem';
import { mdilDelete, mdilPlus } from '@mdi/light-js';
import { mdiSchoolOutline } from '@mdi/js';
import Icon from '@mdi/react';



function FormEducationList(props) {

    const [active, setActive] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleToggle = () => {
        setActive(!active)
        setEdit(false)
    }

    function handleDelete(id){
        props.setEducations(props.educations.filter(item => item.id !== id))
        setEdit(false)
        setActive(false)
    }

    function handleEdit(item) {
        setActive(true)
        setEdit(true)
        props.setEducationItem({
            ...item
        })
    }

    return (
        <div className='form-section'>
            <h2><Icon path={mdiSchoolOutline} size={1} />Education</h2>
            {props.educations.map(item => {
                return (
                    <div className='form-item-header' onClick={() => handleEdit(item)} key={item.id}>
                        <h3>{item.school}</h3>
                        <button className='btn-delete' onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item.id)
                            }}>
                            <Icon path={mdilDelete} size={1} />
                        </button>
                    </div>
                )
            })}
            <FormEducationItem {...props} edit = {edit} active = {active} setActive = {setActive}/>
            {!active 
            && <button className='btn-add' onClick={handleToggle}>
                <Icon path={mdilPlus} size={1} />
                <span>Add Education</span>
            </button>}
        </div>  
    );
}

export default FormEducationList;