import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getExpensesTotal } from '../selectors/expenses-total';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses';
import { Link } from 'react-router-dom';

class ExpensesSummary extends Component {
    render() {
        const expenseWord = this.props.expensesCount === 1 ? 'expense' : 'expenses';
        const formattedExpenseTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00');
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{this.props.expensesCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span></h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
            </div>
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