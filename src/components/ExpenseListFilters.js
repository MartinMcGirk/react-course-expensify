import React from 'react'
import { connect } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
      calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    };
    onSortChange = (e) => {
        switch (e.target.value) {
            case 'date':
                this.props.sortByDate();
                break;
            case 'amount':
                this.props.sortByAmount();
                break;
        }
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
   filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date))
});

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

export { ConnectedExpenseListFilters, ExpenseListFilters }