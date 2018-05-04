import { filtersReducer } from '../../reducers/filters';
import moment from 'moment/moment';

const defaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).startOf('month'),
    endDate: moment(0).endOf('month')
};

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        ...defaultState
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        ...defaultState,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Hello'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('Hello');
});

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        date: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        date: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});