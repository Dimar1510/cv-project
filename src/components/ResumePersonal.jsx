import React from 'react';
import '../styles/ResumePersonal.css'
import Icon from '@mdi/react';
import { mdilEmail, mdilMapMarker, mdilPhone } from '@mdi/light-js';

function ResumePersonal(props) {
    const personal = props.personal
    return (
        <section className='personal-section'>
            <h1>{personal.name}</h1>
            <div className="contact-info">
                <span><Icon path={mdilEmail} size={1} />{personal.email}</span>
                <span><Icon path={mdilPhone} size={1} />{personal.phone}</span>
                <span><Icon path={mdilMapMarker} size={1} />{personal.address}</span>
            </div>
        </section>  
    );
}

export default ResumePersonal;