import React from 'react';

function ResumePersonal(props) {
    const personal = props.personal
    return (
        <section className='personal-section'>
            <h1>{personal.name}</h1>
            <div className="contact-info">
                <span>{personal.email}</span>
                <span>{personal.phone}</span>
                <span>{personal.address}</span>
            </div>
        </section>  
    );
}

export default ResumePersonal;