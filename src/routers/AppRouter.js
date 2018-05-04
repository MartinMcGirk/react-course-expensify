import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import { ConnectedAddExpensePage } from '../components/AddExpensePage';
import { ConnectedEditExpensePage } from '../components/EditExpensePage';
import { HelpPage } from '../components/HelpPage';
import { NotFoundPage } from '../components/NotFoundPage';
import { Header } from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route component={Header}/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={ConnectedAddExpensePage} />
                <Route path="/edit/:id" component={ConnectedEditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export { AppRouter };