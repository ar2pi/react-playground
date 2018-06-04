import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';

export class ExpenseSummary extends Component {
    nExpenses = () => {
        let s = this.props.expenses.length > 1 ? 's' : '';
        return `${this.props.expenses.length} expense${s}`;
    };
    totExpenses = () => {
        return numeral(getExpensesTotal(this.props.expenses) / 100).format('$0,0.00');
    };
    render() {
        return (
            <div>
                Viewing {this.nExpenses()} totalling {this.totExpenses()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseSummary);
