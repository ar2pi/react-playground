import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ExpenseSummary expenses={expenses} />);
});

test('should summarize multiple expenses', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('Viewing 3 expenses totalling $1,141.95');
});

test('should summarize single expense', () => {
    wrapper.setProps({
        expenses: [expenses[0]]
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('Viewing 1 expense totalling $1.95');
});
