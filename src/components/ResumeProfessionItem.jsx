import React from 'react';

function ResumeProfessionItem(props) {
    return (  
        <div className="profession-item">
            <ul>
                <li className='dates'>
                    {props.start} - {props.end}
                </li>
                <li className="company">
                    {props.company}
                </li>
                <li className="company-location">
                    {props.location}
                </li>
                <li className="position">
                    {props.position}
                </li>
                <li className="description">
                    {props.description}
                </li>
            </ul>
        </div>
    );
}

export default ResumeProfessionItem;