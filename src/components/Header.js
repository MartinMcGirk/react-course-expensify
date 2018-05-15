import React from 'react'
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const ConnectedHeader = connect(undefined, mapDispatchToProps)(Header);

export { Header, ConnectedHeader }