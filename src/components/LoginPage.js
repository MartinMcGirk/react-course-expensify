import React, { Component } from 'react'
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';

const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={ startLogin }>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

const ConnectedLoginPage = connect(undefined, mapDispatchToProps)(LoginPage);

export { LoginPage, ConnectedLoginPage }