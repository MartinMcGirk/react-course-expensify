import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onButtonClick = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onButtonClick}>
                    Remove
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
};

const ConnectedEditExpensePage = connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
export { ConnectedEditExpensePage, EditExpensePage }