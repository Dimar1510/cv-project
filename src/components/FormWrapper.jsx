import React from 'react';
import FormPersonal from './FormPersonal';
import FormEducationList from './FormEducationList';
import FormProfessionList from './FormProfessionList';
import SaveResume from './SaveResume';
import '../styles/FormWrapper.css'

function FormWrapper(props) {

    return (
            <div className='form-wrapper'>
                <SaveResume handlePrint = {props.handlePrint} clearAll = {props.clearAll}/>
                <FormPersonal personal = {props.personal} onChange = {props.setPersonal}/>
                <FormEducationList 
                    educations = {props.educations} 
                    setEducations = {props.setEducations}
                    educationItem = {props.educationItem}
                    setEducationItem = {props.setEducationItem}
                /> 
                <FormProfessionList
                    professions = {props.professions}
                    setProfessions = {props.setProfessions}
                    professionItem = {props.professionItem}
                    setProfessionItem = {props.setProfessionItem}
                /> 
            </div>
    );

}

export default FormWrapper; 