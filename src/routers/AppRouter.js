import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom'
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import { ConnectedAddExpensePage } from '../components/AddExpensePage';
import { ConnectedEditExpensePage } from '../components/EditExpensePage';
import { HelpPage } from '../components/HelpPage';
import { NotFoundPage } from '../components/NotFoundPage';
import { ConnectedLoginPage } from '../components/LoginPage';
import { ConnectedPrivateRoute } from './PrivateRoute'
import { ConnectedPublicRoute } from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <ConnectedPublicRoute path="/" component={ConnectedLoginPage} exact={true}/>
                <ConnectedPrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <ConnectedPrivateRoute path="/create" component={ConnectedAddExpensePage}/>
                <ConnectedPrivateRoute path="/edit/:id" component={ConnectedEditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export { AppRouter };