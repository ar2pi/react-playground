import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expenseTotal={114195} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('Viewing 3 expenses totalling $1,141.95');
});

test('should render ExpenseSummary correctly with single expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={195} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('Viewing 1 expense totalling $1.95');
});
