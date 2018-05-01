import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'New expense',
        note: '',
        amount: 200,
        createdAt: moment()
    };
    const action = { type: 'ADD_EXPENSE', expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const updates = {
        description: 'New description'
    };
    const action = { type: 'EDIT_EXPENSE', id: expenses[1].id, updates };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(updates.description);
});

test('should not edit expense if id not found', () => {
    const id = '-1';
    const updates = {
        description: 'New description'
    };
    const action = { type: 'EDIT_EXPENSE', id, updates };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
