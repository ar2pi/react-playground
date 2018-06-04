import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
    const nExpenses = (() => {
        let s = expenseCount > 1 ? 's' : '';
        return `${expenseCount} expense${s}`;
    })();
    const totExpenses = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div>
            <h2>Viewing {nExpenses} totalling {totExpenses}</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
