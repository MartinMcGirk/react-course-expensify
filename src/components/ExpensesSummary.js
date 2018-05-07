import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getExpensesTotal } from '../selectors/expenses-total';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses';

class ExpensesSummary extends Component {
    render() {
        const expenseWord = this.props.expensesCount === 1 ? 'expense' : 'expenses';
        const formattedExpenseTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00');
        return (
            <div>Viewing {this.props.expensesCount} {expenseWord} totalling {formattedExpenseTotal}</div>
        )
    }
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
};

const ConnectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);

export { ExpensesSummary, ConnectedExpensesSummary }