import React from 'react';
import { useParams } from 'react-router-dom';

import Button from './Button';

import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>gdasgiudhasuiodh h iufhauio sdhf uiog afgso agiof asigfdo g saof hsdifaghasduiofgh uifh dasuifhisdfu hiuoas fhsuid fhuisdf hisduofh 
                    asdhfh aiusohfiudoash fuiosad asdhfuios ihdfua</p>
            </div>
        </>
     );
}
 
export default TaskDetails;