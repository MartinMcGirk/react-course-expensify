import React, { Component } from 'react'
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';

const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button" onClick={ startLogin }>Login with Google</button>

        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

const ConnectedLoginPage = connect(undefined, mapDispatchToProps)(LoginPage);

export { LoginPage, ConnectedLoginPage }