import React from 'react';

function ResumeAbout(props) {
    if (props.about.length > 0)
    return (  
        <section className="resume-list">
            <h2>About me</h2>
            <p>{props.about}</p>
        </section>
    );
}

export default ResumeAbout;