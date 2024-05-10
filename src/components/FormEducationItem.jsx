import React from 'react';
import FormInput from './FormInput';

function FormEducationItem(props) {

    function formReset() {
        let newState = {}
        Object.keys(props.educationItem).map(item => {
                newState[item] = ''
            })
        props.setEducationItem(newState)  
    }

    const onCancelHandler = () => {
        props.setActive(false)
        formReset()
    }

    const editItem = () => {
        const newEducations = props.educations.map(element => {
            const item = props.educationItem
            if (element.id !== item.id) return element
            else return {
                ...element,
                school: item.school,
                degree: item.degree,
                start: item.start,
                end: item.end,
                location: item.location
            }
        })
        props.setEducations(newEducations)
    }

    const addItem = () => {
        props.setEducations([...props.educations, {...props.educationItem,
        id: crypto.randomUUID()
        }])
    }

    const onSaveHandler = () => {
        props.edit 
        ? editItem()
        : addItem()
        props.setActive(false)
        formReset()
    }

    const inputs = [
        {
            name: 'School',
            id: 'school',
            type: 'text',
            value: props.educationItem.school,
            function: e => props.setEducationItem({...props.educationItem, school: e.target.value}) 
        }, 
        {
            name: 'Degree',
            id: 'degree',
            type: 'text',
            value: props.educationItem.degree,
            function: e => props.setEducationItem({...props.educationItem, degree: e.target.value}) 
        }, 
        {
            name: 'Start Date',
            id: 'school_start',
            type: 'text',
            value: props.educationItem.start,
            function: e => props.setEducationItem({...props.educationItem, start: e.target.value}) 
        }, 
        {
            name: 'End Date',
            id: 'school_end',
            type: 'text',
            value: props.educationItem.end,
            function: e => props.setEducationItem({...props.educationItem, end: e.target.value}) 
        }, 
        {
            name: 'Location',
            id: 'school_location',
            type: 'text',
            value: props.educationItem.location,
            function: e => props.setEducationItem({...props.educationItem, location: e.target.value}) 
        }, 
    ]

    return (  
        <div className={props.active ? 'active form-item' : 'form-item'}>
            <ul className='input-list'>
                <h4>{props.edit && 'Edit item'}</h4>
                {inputs.map(item => {
                    return <FormInput {...item} key = {item.id}/>
                })}
            </ul>
            <div className="buttons">
                <button className="btn-cancel" onClick={onCancelHandler}>Cancel</button>
                <button className="btn-save" onClick={onSaveHandler}>Save</button>
            </div>

        </div>
    );
}

export default FormEducationItem;