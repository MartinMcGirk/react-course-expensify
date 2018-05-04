import { getVisibleExpenses } from '../../selectors/expenses';
import moment from 'moment';
import { expenses } from '../fixtures/expenses';

const defaultFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate:undefined
};

test('should filter by text value', () => {
    const filters = {
        ...defaultFilters,
        text: 'e'
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
    const filters = {
        ...defaultFilters,
        startDate: moment(0)
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
    const filters = {
        ...defaultFilters,
        endDate: moment(0)
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const result = getVisibleExpenses(expenses, defaultFilters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        ...defaultFilters,
        sortBy: 'amount'
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});