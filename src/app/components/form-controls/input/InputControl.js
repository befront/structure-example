import React from 'react';
import { Control, Errors } from 'react-redux-form';

import { Input } from 'appComponents/core/input';

import styles from './styles.scss';

const InputControl = ({
    model,
    validators,
    errorMessages,
    showErrorsTrigger = 'touched',
    ...controlProps
}) => (
    <div className={styles.control}> 
        <Control
            model={model}
            component={Input}
            validators={validators}
            mapProps={{
                hasError: ({ fieldValue }) => !fieldValue.valid && fieldValue.touched
            }}
            {...controlProps}
        />
        <Errors 
            messages={errorMessages}
            show={showErrorsTrigger}
            model={model}
            wrapper={props => <div className="form-control__errors">{ props.children }</div>}
            component={props => <div className="form-control__error">{ props.children }</div>}
        />
    </div>
);

export default InputControl;