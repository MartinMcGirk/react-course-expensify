import React from 'react'
import { ConnectedExpenseList } from './ExpenseList';
import { ConnectedExpenseListFilters } from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ConnectedExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);

export { ExpenseDashboardPage }