import React from 'react'
import { ConnectedExpenseList } from './ExpenseList';
import { ConnectedExpenseListFilters } from './ExpenseListFilters';
import { ConnectedExpensesSummary } from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ConnectedExpensesSummary />
        <ConnectedExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);

export { ExpenseDashboardPage }