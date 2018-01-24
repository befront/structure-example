import React from 'react';
import { Form } from 'react-redux-form';

import { registerValidators, registerMessages } from 'appAPI/forms/auth/register';

import { InputControl } from 'appComponents/form-controls/input';
import { Button } from 'appComponents/core/button';
import { SimpleLink } from 'appComponents/core/simple-link';

import styles from './styles.scss';

const RegisterForm = ({ onSubmit, showDialog }) => (
    <div className={styles.container}>
        <Form className={styles.form} model="forms.register" onSubmit={onSubmit}>
            <InputControl 
                label="Ваш e-mail"
                model=".email"
                validators={registerValidators.email}
                errorMessages={registerMessages.email}
            />
            <Button type="submit" className={styles.btn}>
                Зарегистрироваться
            </Button>
        </Form>
        <div className={styles.footer}>
            <p className={styles.text}>Уже регистрировались?</p>
            <SimpleLink className={styles.link} onClick={() => { showDialog('login'); }}>Войти</SimpleLink>
        </div>
    </div>
);

export default RegisterForm;