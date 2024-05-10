import React from 'react';
import FormInput from './FormInput';

function FormProfessionItem(props) {

    function formReset() {
        let newState = {}
        Object.keys(props.professionItem).map(item => {
                newState[item] = ''
            })
        props.setProfessionItem(newState)  
    }

    const onCancelHandler = () => {
        props.setActive(false)
        formReset()
    }

    const editItem = () => {
        const newProfessions = props.professions.map(element => {
            const item = props.professionItem
            if (element.id !== item.id) return element
            else return {
                ...element,
                company: item.company,
                position: item.position,
                start: item.start,
                end: item.end,
                location: item.location,
                description: item.description
            }
        })
        props.setProfessions(newProfessions)
       
    }

    const addItem = () => {
        props.setProfessions([...props.professions, {...props.professionItem,
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
            name: 'Company Name',
            id: 'company',
            type: 'text',
            value: props.professionItem.company,
            function: e => props.setProfessionItem({...props.professionItem, company: e.target.value}) 
        }, 
        {
            name: 'Position Title',
            id: 'position',
            type: 'text',
            value: props.professionItem.position,
            function: e => props.setProfessionItem({...props.professionItem, position: e.target.value}) 
        },
        {
            name: 'Start Date',
            id: 'company_start',
            type: 'text',
            value: props.professionItem.start,
            function: e => props.setProfessionItem({...props.professionItem, start: e.target.value}) 
        },
        {
            name: 'End Date',
            id: 'company_end',
            type: 'text',
            value: props.professionItem.end,
            function: e => props.setProfessionItem({...props.professionItem, end: e.target.value}) 
        },
        {
            name: 'Location',
            id: 'location',
            type: 'text',
            value: props.professionItem.location,
            function: e => props.setProfessionItem({...props.professionItem, location: e.target.value}) 
        },
        {
            name: 'Description',
            id: 'description',
            type: 'text',
            value: props.professionItem.description,
            function: e => props.setProfessionItem({...props.professionItem, description: e.target.value}) 
        },
    ]




    return (  
        <div className={props.active ? 'active form-item' : 'form-item'}>
            <ul className='input-list'>
                <h4>{props.edit && `Edit item` }</h4>
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

export default FormProfessionItem;