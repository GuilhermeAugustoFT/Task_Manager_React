import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
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