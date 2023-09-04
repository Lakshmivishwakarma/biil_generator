import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInPage from '../Component/SignInPage/signInForm';
import store from '../Redux/Store';
import { Provider } from 'react-redux';

test('it shows two input', () => {
    render(
        <Provider store={store}>
            <SignInPage />
        </Provider>)
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();

});

test('it calls onUserAdd when the form is submitted', () => {

});

