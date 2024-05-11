import React, { useState } from 'react';
import FormProfessionItem from './FormProfessionItem';
import { mdilDelete, mdilPlus } from '@mdi/light-js';
import Icon from '@mdi/react';
import { mdiBriefcaseOutline } from '@mdi/js';

function FormProfessionList(props) {
    
    const [active, setActive] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleToggle = () => {
        setActive(!active)
        setEdit(false)
    }

    function handleDelete(id){
        props.setProfessions(props.professions.filter(item => item.id !== id))
    }

    function handleEdit(item) {
        setActive(true)
        setEdit(true)
        props.setProfessionItem({
            ...item
        })
    }

    return (  
        <div className="form-section">
            <h2><Icon path={mdiBriefcaseOutline} size={1} />Experience</h2>
            {props.professions.map(item => {
                return (
                    <div className='form-item-header' onClick={() => handleEdit(item)} key={item.id}>
                        <h3>{item.company}</h3>
                        <button className='btn-delete' onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item.id)
                            }}>
                            <Icon path={mdilDelete} size={1} />
                        </button>
                    </div>
                )
            })}
            <FormProfessionItem {...props} edit = {edit} active = {active} setActive = {setActive}/>
            {!active &&  
                <button className='btn-add' onClick={handleToggle}>
                    <Icon path={mdilPlus} size={1} />
                    <span>Add Expirience</span>
                </button>}
        </div>
    );
}

export default FormProfessionList;