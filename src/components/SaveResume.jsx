import Icon from '@mdi/react';
import { mdilDelete, mdilPrinter } from '@mdi/light-js';

function SaveResume(props) {

    return (  
        <div className='form-section utils'>
            <div className="util-buttons">
                <button className='print' onClick={props.handlePrint}><Icon path={mdilPrinter} size={1} />Print</button>
                <button className='clear' onClick={props.clearAll}><Icon path={mdilDelete} size={1} />Clear</button>
            </div>

        </div>
    );
}

export default SaveResume;