import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from '../Redux/Store';
import { Provider } from 'react-redux';

test('renders App component', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>)
    const navbarElement = screen.getByTestId('navbar-component');
    expect(navbarElement).toBeInTheDocument();

});
