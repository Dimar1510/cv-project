import React from 'react';
import '../styles/ResumePersonal.css'
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiMapMarkerOutline, mdiPhoneOutline, mdiWeb } from '@mdi/js';

function ResumePersonal(props) {
    const personal = props.personal
    return (
        <section className='personal-section'>
            <div className="personal-info">
                <h1 className='name'>{personal.name}</h1>
                <h2 className='speciality'>{personal.speciality}</h2>
            </div>
            
            <div className="contact-info">
                <span><Icon path={mdiMapMarkerOutline} size={1} />{personal.address}</span>
                <span><Icon path={mdiEmailOutline} size={1} />{personal.email}</span>
                <span><Icon path={mdiPhoneOutline} size={1} />{personal.phone}</span>
                {personal.links.map((link, index) => 
                    <span key={index}><Icon path={mdiWeb} size={1}/>{link}</span>
                )}
            </div>
        </section>  
    );
}

export default ResumePersonal;