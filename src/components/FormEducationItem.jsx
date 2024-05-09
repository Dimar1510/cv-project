import React from 'react';

function FormEducationItem(props) {

    function formReset() {
        props.setEducationItem({  
            school: '',
            degree: '',
            start: '',
            end: '',
            location: ''
    })
    }

    const onCancelHandler = () => {
        props.setActive(false)
        formReset()
    }

    const onEditHandler = () => {
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

    
    const onAddHandler = () => {
        props.setEducations([...props.educations, {...props.educationItem,
        id: crypto.randomUUID()
        }])
    }

    const onSaveHandler = () => {
        props.edit 
        ? onEditHandler()
        : onAddHandler()
        props.setActive(false)
        formReset()
    }

    

    return (  
        <div className={props.active ? 'active form-item' : 'form-item'}>
            <ul>
                <h4>{props.edit && 'Edit'}</h4>
                <li className="input-field">
                    <label htmlFor="school">School</label>
                    <input 
                        type="text" 
                        name="school" 
                        id="school"
                        value={props.educationItem.school}
                        onChange={e => props.setEducationItem({...props.educationItem, school: e.target.value})} 
                    />
                    
                </li>
                <li className="input-field">
                    <label htmlFor="degree">Degree</label>
                    <input 
                        type="text" 
                        name="degree" 
                        id="degree"
                        value={props.educationItem.degree} 
                        onChange={e => props.setEducationItem({...props.educationItem, degree: e.target.value})} 
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="school_start">Start date</label>
                    <input 
                        type="text" 
                        name="school_start" 
                        id="school_start"
                        value={props.educationItem.start}
                        onChange={e => props.setEducationItem({...props.educationItem, start: e.target.value})}  
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="school_end">End date</label>
                    <input 
                        type="text" 
                        name="school_end" 
                        id="school_end" 
                        value={props.educationItem.end}
                        onChange={e => props.setEducationItem({...props.educationItem, end: e.target.value})} 
                    />
                </li>
                <li className="input-field">
                    <label htmlFor="school_location">Location</label>
                    <input 
                        type="text" 
                        name="school_location" 
                        id="school_location" 
                        value={props.educationItem.location}
                        onChange={e => props.setEducationItem({...props.educationItem, location: e.target.value})} 
                    />
                </li>
            </ul>
            <button onClick={onCancelHandler}>Cancel</button>
            <button onClick={onSaveHandler}>Save</button>
        </div>
    );
}

export default FormEducationItem;