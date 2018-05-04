import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
});

test('should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list with alt filters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const e = { target: { value: 'test' } };
    wrapper.find('input').at(0).prop('onChange')(e);
    expect(setTextFilter).toHaveBeenLastCalledWith('test');
});

test('should sort by date', () => {
    const e = { target: { value: 'date' } };
    wrapper.find('select').simulate('change', e);
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by date', () => {
    const e = { target: { value: 'amount' } };
    wrapper.find('select').simulate('change', e);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: 1,
        endDate: 2
    });
    expect(setStartDate).toHaveBeenLastCalledWith(1);
    expect(setEndDate).toHaveBeenLastCalledWith(2);
});

test('should handle date focus changes', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
    expect(wrapper.state('calendarFocused')).toBe('endDate');
});