import React from 'react';
import { Form } from 'react-redux-form';

import { loginValidators, loginMessages } from 'appAPI/forms/auth/login';

import { InputControl } from 'appComponents/form-controls/input';
import { Button } from 'appComponents/core/button';
import { SimpleLink } from 'appComponents/core/simple-link';

import styles from './styles.scss';

const LoginForm = ({ onSubmit }) => (
    <div className={styles.container}>
        <Form className={styles.form} model="forms.login" onSubmit={onSubmit}>
            <InputControl 
                label="Ваш e-mail"
                model=".email"
                validators={loginValidators.email}
                errorMessages={loginMessages.email}
            />
            <Button type="submit" className={styles.btn}>
                Войти
            </Button>
        </Form>
        <div className={styles.footer}>
            <p className={styles.text}>Еще не регистрировались?</p>
            <SimpleLink className={styles.link}>Регистрация</SimpleLink>
        </div>
    </div>
);

export default LoginForm;