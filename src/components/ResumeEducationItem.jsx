import React from 'react';

function ResumeEducationItem(props) {
    return (  
        <div className="education-item">
            <ul>
                <li className='dates'>
                    {props.start} - {props.end}
                </li>
                <li className="school">
                    {props.school}
                </li>
                <li className="school-location">
                    {props.location}
                </li>
                <li className="degree">
                    {props.degree}
                </li>
            </ul>
        </div>
    );
}

export default ResumeEducationItem;