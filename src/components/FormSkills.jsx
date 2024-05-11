import React from 'react';
import { mdilDelete, mdilPlus } from '@mdi/light-js';
import Icon from '@mdi/react';
import { mdiAccountCogOutline} from '@mdi/js';

function FormSkills(props) {

    return (  
        <div className="form-section skills">
            <h2><Icon path={mdiAccountCogOutline} size={1} />Skills</h2>
            {props.personal.skills.map((skill, index) => {
                return(
                    <li className="input-field" key={index}>
                        <input 
                            type="text" 
                            placeholder='Language or Technology'
                            id={`skill-${index}`} 
                            value={skill}
                            onChange={(e) => {
                                const value = e.target.value
                                const newData = {...props.personal}
                                newData.skills[index] = value
                                props.onChange(newData)
                            }}
                        /> 
                        <button 
                            className='btn-delete' 
                            onClick={() => {
                                const newData = {...props.personal}
                                newData.skills.splice(index, 1)
                                props.onChange(newData)
                              }}
                            >
                                <Icon path={mdilDelete} size={1} />
                        </button> 
                    </li>
                )
            })}

            <button 
                className='btn-add'
                onClick={() => {
                    const newData = {...props.personal}
                    newData.skills.push('')
                    props.onChange(newData)
                }}    
            >
                    <Icon path={mdilPlus} size={1} />
                    <span>Add Skill</span>
            </button>
        </div>
    );
}

export default FormSkills;