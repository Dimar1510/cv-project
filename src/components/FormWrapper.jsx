import React from 'react';
import FormPersonal from './FormPersonal';
import FormEducationList from './FormEducationList';

function FormWrapper(props) {
    return (
            <div className='form-wrapper'>
                <FormPersonal personal = {props.personal} onChange = {props.setPersonal}/>
                <FormEducationList 
                    educations = {props.educations} 
                    setEducations = {props.setEducations}
                    educationItem = {props.educationItem}
                    setEducationItem = {props.setEducationItem}
                />    
            </div>
    );

}

export default FormWrapper; 